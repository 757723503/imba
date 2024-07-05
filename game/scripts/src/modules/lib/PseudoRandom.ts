@reloadable
export class PseudoRandom {
    /**随机数的C值 */
    private _randomC: Record<number, number> = {};
    /**伪随机实例们 */
    private _random_instance: Record<string, { p: number; time: number }> = {};

    constructor() {
        print('伪随机管理器已创建');
        this.___AfterReload();
    }

    private ___AfterReload(): void {
        this._InitGCTimer();
    }

    private _InitGCTimer(): void {
        Timers.CreateTimer(60, () => {
            for (const key of Object.keys(this._random_instance)) {
                if (GameRules.GetGameTime() - this._random_instance[key].time > 60) {
                    this._random_instance[key] = null;
                    print(`[PseudoRandom] 移除了超过60秒未使用的随机实例：${key}`);
                }
            }
        });
    }

    /**
     * Roll一次伪随机，返回是否成功
     * @param pct 随机的几率，后面的参数不传就是一个真随机
     * @param instance 参与随机的实例 实体或modifier
     * @param prefix 额外标识符，一个实例有多个伪随机需求时传入不同的标识符用以区分
     * @returns
     */
    public RollPercentage(pct: number, instance?: CBaseEntity | CDOTA_Buff, prefix?: string): boolean {
        if (!instance) {
            return RollPercentage(pct);
        }
        if (tonumber(pct) <= 0) return false;
        if (tonumber(pct) >= 100) return true;
        const random_id: string = tostring(instance) + (prefix ?? '');
        this._randomC[pct] = this._randomC[pct] ?? this._CFromP(pct);
        const increase = this._randomC[pct];
        this._random_instance[random_id] = this._random_instance[random_id] ?? { p: 0, time: GameRules.GetGameTime() };
        this._random_instance[random_id].p = this._random_instance[random_id].p + increase;
        const result = RollPercentage(this._random_instance[random_id].p);
        if (result) this._random_instance[random_id].p = 0;
        return result;
    }

    private ___BeforeReload(): void {
        this._random_instance = {};
    }

    private _CFromP(p: number): number {
        let Cupper = p;
        let Clower = 0;
        let Cmid = 0;

        let p1 = 0;
        let p2 = 1;
        while (true) {
            Cmid = (Cupper + Clower) / 2;
            p1 = this._PFromC(Cmid);
            if (math.abs(p1 - p2) <= 0) {
                break;
            }

            if (p1 > p) {
                Cupper = Cmid;
            } else {
                Clower = Cmid;
            }
            p2 = p1;
        }
        return Cmid;
    }

    private _PFromC(c: number): number {
        let pOnN = 0;
        let pByN = 0;
        let sumPByN = 0;

        const maxFails = math.ceil(1 / c);

        for (let N = 1; N <= maxFails; N++) {
            pOnN = math.min(1, N * c) * (1 - pByN);
            pByN = pByN + pOnN;
            sumPByN = sumPByN + N * pOnN;
        }

        return 1 / sumPByN;
    }
}

declare global {
    var Random: PseudoRandom;
}
