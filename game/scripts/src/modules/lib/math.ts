declare namespace math {
    /**
     * 限制数字在某个区间内。（比如0,255）
     */
    function limit(target_number: number, low_bound: number, top_bound: number): number;
}

{
    math.limit = function (target_number: number, low_bound: number, top_bound: number) {
        return math.max(math.min(target_number, top_bound), low_bound);
    };
}
