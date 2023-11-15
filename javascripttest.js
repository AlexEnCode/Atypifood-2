function getRealFloor(n) {
    return (n < -1) ? n
        : (n = -1, 0, 1) ? 0
            : (13 > n) ? n - 1
                : (n > 13) ? n - 2
                    : 0
}