//显示tips，可以设置要提示的内容
function ShowTips(tipStr) {
    $("#tipcontent").text(tipStr);
    $("#errortip").show();
}

$(document).ready(function() {
    //整个页面的初始化部分

    //获得当前窗口的大小并设置各个view的尺寸
    var wWidth = window.innerWidth;
    var wHeight = window.innerHeight;

    $("#div-systitle").height(70);
    $("#div-syshelp").height($("#div-systitle").height());
    $("#comparison-div").height(150);
    var mainContentDivHeight = wHeight - $("#div-systitle").height() - $("#comparison-div").height() - 2 - 2;
    $("#main-content-div").height(mainContentDivHeight);

    var heightForTwoDfddraw = mainContentDivHeight - 34 - 36 - 36 - 12;
    $(".flowchart-example-container").height(heightForTwoDfddraw / 2);

    //手风琴效果的控制
    var currentDivDisplayed = 2;
    $("#accordion-element-1").on('show.bs.collapse', function() {
        $("#flowchartdiv1").show();
        currentDivDisplayed += 1;
        var currentAccordionDivHeight = heightForTwoDfddraw / currentDivDisplayed;
        $(".flowchart-example-container").height(currentAccordionDivHeight);
    });
    $("#accordion-element-1").on('hide.bs.collapse', function() {
        $("#flowchartdiv1").hide();
        currentDivDisplayed -= 1;
        if (currentDivDisplayed > 0) {
            var currentAccordionDivHeight = heightForTwoDfddraw / currentDivDisplayed;
            $(".flowchart-example-container").height(currentAccordionDivHeight);
        }
    });
    $("#accordion-element-2").on('show.bs.collapse', function() {
        $("#flowchartdiv2").show();
        currentDivDisplayed += 1;
        var currentAccordionDivHeight = heightForTwoDfddraw / currentDivDisplayed;
        $(".flowchart-example-container").height(currentAccordionDivHeight);
    });
    $("#accordion-element-2").on('hide.bs.collapse', function() {
        $("#flowchartdiv2").hide();
        currentDivDisplayed -= 1;
        if (currentDivDisplayed > 0) {
            var currentAccordionDivHeight = heightForTwoDfddraw / currentDivDisplayed;
            $(".flowchart-example-container").height(currentAccordionDivHeight);
        }
    });

    //tips关闭
    $("#tipclose").click(function() {
        $("#errortip").hide();
    });

    //btn-new1事件
    $("#btn-new1").click(function() {
        newNode1();
    });

    //btn-new2事件
    $("#btn-new2").click(function() {
        newNode2();
    });

    //btn-delete事件
    //默认disable
    $("#btn-delete").attr('disabled', "true");
    $("#btn-delete").click(function() {
        delNodeOrLink();
    });


    //btn-OOOMMO事件
    //初始默认为OO模式
    $("#btn-OO").addClass("btn-info");
    $("#btn-OO").click(function() {
        $("#btn-OO").addClass("btn-info");
        $("#btn-OM").removeClass("btn-info");
        $("#btn-MO").removeClass("btn-info");
        mode1Choosen();
    });
    $("#btn-OM").click(function() {
        $("#btn-OO").removeClass("btn-info");
        $("#btn-OM").addClass("btn-info");
        $("#btn-MO").removeClass("btn-info");
        mode2Choosen();

    });
    $("#btn-MO").click(function() {
        $("#btn-OO").removeClass("btn-info");
        $("#btn-OM").removeClass("btn-info");
        $("#btn-MO").addClass("btn-info");
        mode3Choosen();
    });

    //btn-submit
    $("#btn-submit").click(function() {
        flowChartSubmit();
    });

    //初始化流图输入
    initFlowchart();
});
