function drawDotRing(canvasid) {
    var canvas = document.getElementById(canvasid);
    var ctx = canvas.getContext("2d");
    //获取canvas中心坐标
    var center = {};
    var cw = canvas.width;
    var ch = canvas.height;
    console.log(cw + "==" + ch);
    center.x = cw / 2;
    center.y = ch / 2;
    console.log(center.x + "__" + center.y);
    var ring_radius = center.y - 20; //圆环半径
    var dotRadius = 5;//圆环上的小圆半径
    ctx.fillStyle = "#A0A0A0";
    drawDot(ctx, center, ring_radius, true);
    var angles = [];
    for (i = 0; i < 22; i++) {
        angles[i] = i * 6;
    }
    var cneters = [];
    for (i = 0; i < angles.length; i++) {
        cneters[i] = getRandomPointOnRadius(angles[i], center, ring_radius, false);
        drawDot(ctx, cneters[i], dotRadius);
    }
}

/**
 *画圆或者圆弧，
 * ctx,画布
 * coords,圆心
 * radius,半径
 * ring ：false画实心圆，true画空心圆
 * insideColor ：实心圆填充色
 * arcColor ：空心圆圆弧颜色
 */
function drawDot(ctx, coords, radius, ring,insideColor,arcColor) {
    if (!ring) {
        ctx.fillStyle = insideColor;
        ctx.strokeStyle = insideColor;
    } else {
        ctx.strokeStyle = arcColor;
    }
    ctx.beginPath();
    ctx.arc(coords.x, coords.y, radius, 0, 2 * Math.PI);
    if(!ring){
        ctx.fill();
    }else{
        ctx.stroke();
    }
}

/**
 * *画圆弧，
 * ctx,画布
 * coords,圆心
 * radius,半径
 * @param anglestart
 * @param analeend
 * @param linewidt 弧线粗细
 */
function drawArc(ctx, coords, radius,anglestart,analeend,linewidth,arcColor) {
    ctx.beginPath();
    ctx.strokeStyle = arcColor;
    ctx.lineWidth = linewidth;
    ctx.arc(coords.x, coords.y, radius, anglestart, analeend,1);
    ctx.stroke();
    ctx.closePath();
}

/**
 * 随机生成圆弧上面的实心圆圆心坐标
 * @param an
 * @param coords
 * @param r
 * @returns {*[]}
 */
function getRandomPointOnRadius(an, coords, r) {
    var x2 = coords.x + (r * 1) * Math.cos(an);
    var y2 = coords.y + (r * 1) * Math.sin(an);
    var cneter_p = {
        x: x2,
        y: y2
    };
    return cneter_p;
}