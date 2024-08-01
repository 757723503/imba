import { KeyValues } from 'easy-keyvalues';
// KeyValues.Load(file: string, encoding?: string): Promise<KeyValues>;
// KeyValues.Save(): Promise<void>;
// KeyValues.Save(otherFile: string, encoding?: string): Promise<void>;
// const kv = await KeyValues.Load('../game/scripts/npc/npc_abilities_custom.txt', 'utf8');
(async () => {
    const kv = await KeyValues.Load('../game/scripts/npc/custom_heroes/npc_dota_hero_abaddon.txt', 'utf8');
    console.log(kv);
})();
// console.log(kv);
