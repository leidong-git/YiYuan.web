const Win_Rotate = function (data) {
    let win_rotate = ''
    switch (data) {
        case 1:
            win_rotate = '北风'
            break
        case 2:
            win_rotate = '东北风'
            break
        case 3:
            win_rotate = '东风'
            break
        case 4:
            win_rotate = '东南风'
            break
        case 5:
            win_rotate = '南风'
            break
        case 6:
            win_rotate = '西南风'
            break
        case 7:
            win_rotate = '西风'
            break
        case 8:
            win_rotate = '西北风'
            break
        default:
            win_rotate = '暂无风向'
            break
    }
    return win_rotate
}

const Next_Time = function () {
    let next_time = ''

    let myDate = new Date()
    let yy = String(myDate.getFullYear())
    let mm = myDate.getMonth() + 1
    mm = String(mm < 10 ? '0' + mm : mm)
    let mm1 = (new Date(myDate.getTime() + 24 * 60 * 60 * 1000)).getMonth() + 1
    mm1 = String(mm1 < 10 ? '0' + mm1 : mm1)
    let dd = (new Date(myDate.getTime())).getDate()
    dd = String(dd < 10 ? '0' + dd : dd)
    let dd1 = (new Date(myDate.getTime() + 24 * 60 * 60 * 1000)).getDate()
    dd1 = String(dd1 < 10 ? '0' + dd1 : dd1)

    next_time = yy + '-' + mm + '-' + dd + ' 20时 - ' + yy + '-' + mm1 + '-' + dd1 + ' 20时'
    return next_time
}

const New_Month = function () {
    let new_month = ''

    let myDate = new Date()
    let yy = String(myDate.getFullYear())
    let mm = myDate.getMonth() + 1
    mm = String(mm < 10 ? '0' + mm : mm)

    new_month = yy + '-' + mm
    return new_month
}
