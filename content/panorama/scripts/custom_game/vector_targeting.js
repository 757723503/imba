/// Vector Targeting
const CONSUME_EVENT = true;
const CONTINUE_PROCESSING_EVENT = false;
//main variables
var vectorTargetParticle;
var vectorTargetUnit;
var vectorStartPosition;
var IsLocation;
var IsAOE;
var Targetunit;
var vectorRange = 800;
var useDual = false;
var currentlyActiveVectorTargetAbility;

const defaultAbilities = [
    'pangolier_swashbuckle',
    'clinkz_burning_army',
    'dark_seer_wall_of_replica',
    'void_spirit_aether_remnant',
    'broodmother_sticky_snare',
];
const ignoreAbilites = ['tusk_walrus_kick', 'marci_companion_run'];

//Mouse Callback to check whever this ability was quick casted or not
GameUI.SetMouseCallback(function (eventName, arg, arg2, arg3) {
    if (GameUI.GetClickBehaviors() == 3 && currentlyActiveVectorTargetAbility != undefined) {
        $.Msg('按压鼠标=======================================================');
        const result = DetermineShowParticle();
        show = result.Show;
        IsLocation = result.IsLocation;
        IsAOE = result.IsAOE;
        worldPosition = result.Position;
        Targetunit = result.TargetIndex;

        if (show) {
            const netTable = CustomNetTables.GetTableValue('vector_targeting', currentlyActiveVectorTargetAbility);
            OnVectorTargetingStart(
                netTable.startWidth,
                netTable.endWidth,
                netTable.castLength,
                netTable.dual,
                netTable.ignoreArrow,
                false,
                worldPosition
            );
        }
    }
    return CONTINUE_PROCESSING_EVENT;
});

//Listen for class changes
$.RegisterForUnhandledEvent('StyleClassesChanged', CheckAbilityVectorTargeting);
function CheckAbilityVectorTargeting(panel) {
    if (panel == null) {
        return;
    }
    //Check if the panel is an ability or item panel
    const abilityIndex = GetAbilityFromPanel(panel);
    // $.Msg(abilityIndex)
    if (abilityIndex >= 0) {
        //Check if the ability/item is vector targeted
        const netTable = CustomNetTables.GetTableValue('vector_targeting', abilityIndex);
        $.Msg(netTable == null, '检查向量技能按压=======================================================');

        if (netTable == undefined) {
            const behavior = Abilities.GetBehavior(abilityIndex);

            if ((behavior & DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_VECTOR_TARGETING) !== 0) {
                GameEvents.SendCustomGameEventToServer('check_ability', { abilityIndex: abilityIndex });
            }
            return;
        }

        //Check if the ability/item gets activated or is finished
        if (panel.BHasClass('is_active')) {
            currentlyActiveVectorTargetAbility = abilityIndex;
            if (GameUI.GetClickBehaviors() == 9) {
                OnVectorTargetingStart(
                    netTable.startWidth,
                    netTable.endWidth,
                    netTable.castLength,
                    netTable.dual,
                    netTable.ignoreArrow,
                    true,
                    undefined,
                    undefined,
                    undefined
                );
            }
        } else {
            OnVectorTargetingEnd();
        }
    }
}

//Find the ability/item entindex from the panorama panel
function GetAbilityFromPanel(panel) {
    if (panel.paneltype == 'DOTAAbilityPanel') {
        // Be sure that it is a default ability Button
        const parent = panel.GetParent();
        if (parent != undefined && (parent.id == 'abilities' || parent.id == 'inventory_list')) {
            const abilityImage = panel.FindChildTraverse('AbilityImage');
            let abilityIndex = abilityImage.contextEntityIndex;
            const abilityName = abilityImage.abilityname;
            //Will be undefined for items
            if (abilityName) {
                return abilityIndex;
            }

            //Return item entindex instead
            const itemImage = panel.FindChildTraverse('ItemImage');
            abilityIndex = itemImage.contextEntityIndex;
            return abilityIndex;
        }
    }
    return -1;
}

// Start the vector targeting
function OnVectorTargetingStart(fStartWidth, fEndWidth, fCastLength, bDual, bIgnoreArrow, bQuickCast, worldPosition) {
    if (vectorTargetParticle) {
        Particles.DestroyParticleEffect(vectorTargetParticle, true);
        vectorTargetParticle = undefined;
        vectorTargetUnit = undefined;
    }

    //const iPlayerID = Players.GetLocalPlayer();
    //const selectedEntities = Players.GetSelectedEntities( iPlayerID );
    const mainSelected = Players.GetLocalPlayerPortraitUnit();
    //const mainSelectedName = Entities.GetUnitName(mainSelected);
    vectorTargetUnit = mainSelected;
    show = false;
    if (bQuickCast) {
        const result = DetermineShowParticle();
        show = result.Show;
        IsLocation = result.IsLocation;
        IsAOE = result.IsAOE;
        worldPosition = result.Position;
        Targetunit = result.TargetIndex;
    } else {
        show = true;
    }

    if (show) {
        // particle variables
        let startWidth = fStartWidth || 125;
        let endWidth = fEndWidth || startWidth;
        vectorRange = fCastLength || 800;
        let ignoreArrowWidth = bIgnoreArrow;
        useDual = bDual == 1;

        // redo dota's default particles
        const abilityName = Abilities.GetAbilityName(currentlyActiveVectorTargetAbility);
        if (ignoreAbilites.includes(abilityName)) return;
        if (defaultAbilities.includes(abilityName)) {
            if (abilityName == 'void_spirit_aether_remnant') {
                startWidth = Abilities.GetSpecialValueFor(currentlyActiveVectorTargetAbility, 'start_radius');
                endWidth = Abilities.GetSpecialValueFor(currentlyActiveVectorTargetAbility, 'end_radius');
                vectorRange = Abilities.GetSpecialValueFor(currentlyActiveVectorTargetAbility, 'remnant_watch_distance');
                ignoreArrowWidth = 1;
            } else if (abilityName == 'dark_seer_wall_of_replica') {
                vectorRange = Abilities.GetSpecialValueFor(currentlyActiveVectorTargetAbility, 'width');
                let multiplier = 1;
                if (Entities.HasScepter(mainSelected)) {
                    multiplier = Abilities.GetSpecialValueFor(currentlyActiveVectorTargetAbility, 'scepter_length_multiplier');
                }
                vectorRange = vectorRange * multiplier;
                useDual = true;
            } else if (abilityName == 'broodmother_sticky_snare') {
                useDual = true;
            } else {
                vectorRange = Abilities.GetSpecialValueFor(currentlyActiveVectorTargetAbility, 'range');
            }
        }

        if (useDual) {
            vectorRange = vectorRange / 2;
        }

        let particleName = '';
        if (IsAOE) {
            particleName = 'particles/ui_mouseactions/custom_range_finder_aoe.vpcf';
            if (useDual) {
                particleName = 'particles/ui_mouseactions/custom_range_finder_aoe_dual.vpcf';
            }
        } else {
            particleName = 'particles/ui_mouseactions/custom_range_finder_cone.vpcf';
            if (useDual) {
                particleName = 'particles/ui_mouseactions/custom_range_finder_cone_dual.vpcf';
            }
        }

        //Initialize the particle
        vectorTargetParticle = Particles.CreateParticle(particleName, ParticleAttachment_t.PATTACH_CUSTOMORIGIN, mainSelected);
        vectorTargetUnit = mainSelected;
        if (IsLocation) {
            Particles.SetParticleControl(vectorTargetParticle, 1, Vector_raiseZ(worldPosition, 100));
        } else {
            Particles.SetParticleControlEnt(vectorTargetParticle, 1, Targetunit, ParticleAttachment_t.PATTACH_ABSORIGIN_FOLLOW, '', [0, 0, 0], true);
        }
        if (IsAOE) {
            Particles.SetParticleControl(vectorTargetParticle, 3, [0, 0, Abilities.GetAOERadius(currentlyActiveVectorTargetAbility)]);
        } else {
            Particles.SetParticleControl(vectorTargetParticle, 3, [endWidth, startWidth, ignoreArrowWidth]);
        }
        Particles.SetParticleControl(vectorTargetParticle, 4, [0, 255, 0]);

        //Calculate initial particle CPs
        vectorStartPosition = worldPosition;
        const unitPosition = Entities.GetAbsOrigin(mainSelected);
        const direction = Vector_normalize(Vector_sub(vectorStartPosition, unitPosition));
        const newPosition = Vector_add(vectorStartPosition, Vector_mult(direction, vectorRange));
        if (!useDual) {
            Particles.SetParticleControl(vectorTargetParticle, 2, newPosition);
        } else {
            Particles.SetParticleControl(vectorTargetParticle, 7, newPosition);
            const secondPosition = Vector_add(vectorStartPosition, Vector_mult(Vector_negate(direction), vectorRange));
            Particles.SetParticleControl(vectorTargetParticle, 8, secondPosition);
        }

        //Start position updates
        ShowVectorTargetingParticle();
        currentlyActiveVectorTargetAbility = undefined;
    }
    // else
    // {
    // 		GameEvents.SendCustomGameEventToServer("canceled_cas", {"entity_index" : mainSelected} );
    // }
    return CONTINUE_PROCESSING_EVENT;
}

//End the particle effect
function OnVectorTargetingEnd() {
    // $.Msg("end")
    if (vectorTargetParticle) {
        Particles.DestroyParticleEffect(vectorTargetParticle, true);
        vectorTargetParticle = undefined;
        vectorTargetUnit = undefined;
    }
}

function DetermineShowParticle() {
    show = false;
    const cursor = GameUI.GetCursorPosition();
    const behavior = Abilities.GetBehavior(currentlyActiveVectorTargetAbility);
    t_IsLocation = valueAtBit(behavior, 5);
    t_IsAOE = valueAtBit(behavior, 6);
    targetunit = -1;
    worldPosition = undefined;

    if (!t_IsLocation) {
        const targetunits = GameUI.FindScreenEntities(cursor);

        for (var e of targetunits) {
            if (!e.accurateCollision) continue;
            targetunit = e.entityIndex;
        }

        if (targetunit == -1 && targetunits.length != 0) targetunit = targetunits[0].entityIndex;

        if (targetunit != -1) {
            const abilityTeamType = Abilities.GetAbilityTargetTeam(currentlyActiveVectorTargetAbility);
            const Isenemy = Entities.IsEnemy(targetunit);
            isTrueTarget = false;
            switch (abilityTeamType) {
                case DOTA_UNIT_TARGET_TEAM.DOTA_UNIT_TARGET_TEAM_ENEMY:
                    if (Isenemy) isTrueTarget = true;
                    break;
                case DOTA_UNIT_TARGET_TEAM.DOTA_UNIT_TARGET_TEAM_FRIENDLY:
                    if (!Isenemy) isTrueTarget = true;
                    break;
                case DOTA_UNIT_TARGET_TEAM.DOTA_UNIT_TARGET_TEAM_BOTH:
                    isTrueTarget = true;
                    break;
            }
            if (isTrueTarget) {
                const abilityTargetType = Abilities.GetAbilityTargetType(currentlyActiveVectorTargetAbility);
                if (isTrueTarget) {
                    if (
                        !(
                            (valueAtBit(abilityTargetType, 1) && Entities.IsHero(targetunit)) ||
                            (valueAtBit(abilityTargetType, 2) && Entities.IsCreep(targetunit)) ||
                            (valueAtBit(abilityTargetType, 3) && Entities.IsBuilding(targetunit)) ||
                            (valueAtBit(abilityTargetType, 4) && Entities.IsCourier(targetunit)) ||
                            (valueAtBit(abilityTargetType, 5) && Entities.IsOther(targetunit))
                        )
                    ) {
                        isTrueTarget = false;
                    }
                }

                const abilityTargetFlag = Abilities.GetAbilityTargetFlags(currentlyActiveVectorTargetAbility);
                if (isTrueTarget) {
                    const isRangedAttacker = Entities.IsRangedAttacker(targetunit);
                    const IsEnemy = Entities.IsEnemy(targetunit);
                    const IsMagicImmune = Entities.IsMagicImmune(targetunit);
                    if (
                        (valueAtBit(abilityTargetFlag, 2) && !isRangedAttacker) ||
                        (valueAtBit(abilityTargetFlag, 3) && isRangedAttacker) ||
                        (!valueAtBit(abilityTargetFlag, 4) && !Entities.IsAlive(targetunit)) ||
                        (!valueAtBit(abilityTargetFlag, 5) && IsMagicImmune && IsEnemy) ||
                        (valueAtBit(abilityTargetFlag, 6) && IsMagicImmune && !IsEnemy) ||
                        (valueAtBit(abilityTargetFlag, 7) && Entities.IsInvulnerable(targetunit)) ||
                        (valueAtBit(abilityTargetFlag, 9) && Entities.IsInvisible(targetunit) && IsEnemy) ||
                        (valueAtBit(abilityTargetFlag, 10) && Entities.IsAncient(targetunit)) ||
                        (valueAtBit(abilityTargetFlag, 11) && !Entities.IsControllableByAnyPlayer(targetunit)) ||
                        (valueAtBit(abilityTargetFlag, 12) && Entities.IsDominated(targetunit)) ||
                        (valueAtBit(abilityTargetFlag, 13) && Entities.IsSummoned(targetunit)) ||
                        (valueAtBit(abilityTargetFlag, 14) && Entities.IsIllusion(targetunit)) ||
                        (valueAtBit(abilityTargetFlag, 15) && Entities.IsAttackImmune(targetunit)) ||
                        (valueAtBit(abilityTargetFlag, 18) && Entities.IsCreepHero(targetunit)) ||
                        (valueAtBit(abilityTargetFlag, 20) && Entities.IsNightmared(targetunit))
                    ) {
                        isTrueTarget = false;
                    }
                }

                if (isTrueTarget) {
                    const position = Entities.GetAbsOrigin(targetunit);
                    if (position != undefined) {
                        worldPosition = position;
                        show = true;
                    }
                }
            }
        }
    } else {
        worldPosition = GameUI.GetScreenWorldPosition(cursor);
        show = true;
    }
    return { Show: show, IsLocation: t_IsLocation, IsAOE: t_IsAOE, Position: worldPosition, TargetIndex: targetunit };
}

//Updates the particle effect and detects when the ability is actually casted
function ShowVectorTargetingParticle() {
    if (vectorTargetParticle !== undefined) {
        const mainSelected = Players.GetLocalPlayerPortraitUnit();
        const cursor = GameUI.GetCursorPosition();
        const worldPosition = GameUI.GetScreenWorldPosition(cursor);

        if (worldPosition == null) {
            $.Schedule(1 / 144, ShowVectorTargetingParticle);
            return;
        }
        if (IsLocation) {
            const testVec = Vector_sub(worldPosition, vectorStartPosition);
            if (!(testVec[0] == 0 && testVec[1] == 0 && testVec[2] == 0)) {
                let direction = Vector_normalize(Vector_sub(vectorStartPosition, worldPosition));
                direction = Vector_flatten(Vector_negate(direction));
                const newPosition = Vector_add(vectorStartPosition, Vector_mult(direction, vectorRange));

                if (!useDual) {
                    Particles.SetParticleControl(vectorTargetParticle, 2, newPosition);
                } else {
                    Particles.SetParticleControl(vectorTargetParticle, 7, newPosition);
                    const secondPosition = Vector_add(vectorStartPosition, Vector_mult(Vector_negate(direction), vectorRange));
                    Particles.SetParticleControl(vectorTargetParticle, 8, secondPosition);
                }
            }
        } else {
            const targetUnitPosition = Entities.GetAbsOrigin(targetunit);
            const testVec = Vector_sub(worldPosition, targetUnitPosition);
            if (!(testVec[0] == 0 && testVec[1] == 0 && testVec[2] == 0)) {
                let t_targetunit = -1;
                const t_targetunits = GameUI.FindScreenEntities(cursor);

                for (var e of t_targetunits) {
                    if (!e.accurateCollision) continue;
                    t_targetunit = e.entityIndex;
                }

                if (t_targetunit == -1) {
                    if (t_targetunits.length != 0) {
                        t_targetunit = t_targetunits[0].entityIndex;
                    } else {
                        t_targetunit = -1;
                    }
                }

                let direction = undefined;
                if (t_targetunit != Targetunit) {
                    direction = Vector_negate(Vector_normalize(Vector_sub(targetUnitPosition, worldPosition)));
                } else {
                    direction = Entities.GetForward(Targetunit);
                }

                direction = Vector_flatten(direction);
                const newPosition = Vector_add(targetUnitPosition, Vector_mult(direction, vectorRange));

                if (!useDual) {
                    Particles.SetParticleControl(vectorTargetParticle, 2, newPosition);
                } else {
                    Particles.SetParticleControl(vectorTargetParticle, 7, newPosition);
                    const secondPosition = Vector_add(targetUnitPosition, Vector_mult(Vector_negate(direction), vectorRange));
                    Particles.SetParticleControl(vectorTargetParticle, 8, secondPosition);
                }
            }
        }
        if (mainSelected != vectorTargetUnit) {
            GameUI.SelectUnit(vectorTargetUnit, false);
        }
        $.Schedule(1 / 144, ShowVectorTargetingParticle);
    }
}

//Some Vector Functions here:
function Vector_normalize(vec) {
    const val = 1 / Math.sqrt(Math.pow(vec[0], 2) + Math.pow(vec[1], 2) + Math.pow(vec[2], 2));
    return [vec[0] * val, vec[1] * val, vec[2] * val];
}

function Vector_mult(vec, mult) {
    return [vec[0] * mult, vec[1] * mult, vec[2] * mult];
}

function Vector_add(vec1, vec2) {
    return [vec1[0] + vec2[0], vec1[1] + vec2[1], vec1[2] + vec2[2]];
}

function Vector_sub(vec1, vec2) {
    return [vec1[0] - vec2[0], vec1[1] - vec2[1], vec1[2] - vec2[2]];
}

function Vector_negate(vec) {
    return [-vec[0], -vec[1], -vec[2]];
}

function Vector_flatten(vec) {
    return [vec[0], vec[1], 0];
}

function Vector_raiseZ(vec, inc) {
    return [vec[0], vec[1], vec[2] + inc];
}

function valueAtBit(num, bit) {
    return ((num >> (bit - 1)) & 1) == 1;
}
