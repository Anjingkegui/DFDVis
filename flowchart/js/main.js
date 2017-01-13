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

    //初始化流图输入部分
    var operatorI = 1;
    var $operatorProperties = $('#operator_properties');
    var $linkProperties = $('#link_properties');
    var $operatorTitle = $('#operator_title');
    var $linkTitle = $('#link_title');

    //图1
    var initTop1 = 20;
    var initLeft1 = 20;
    var data = {
        operators: {
            o1: {
                top: initTop1,
                left: initLeft1,
                properties: {
                    title: 'node' + operatorI,
                    inputs: {
                        inp: {
                            label: 'In',
                            multiple: true
                        }
                    },
                    outputs: {
                        outp: {
                            label: 'Out',
                            multiple: true
                        }
                    }
                }
            }
        },
        links: {}
    };
    var $dfd1 = $('#flowchartdiv1');
    $dfd1.flowchart({
        data: data,
        //这四个函数在这里设置是要保持对operator_properties、link_properties等元素的操作
        onOperatorSelect: function(operatorId) {
            $("#btn-delete").removeAttr("disabled");
            $operatorProperties.show();
            $operatorTitle.val($dfd1.flowchart('getOperatorTitle', operatorId));
            return true;
        },
        onOperatorUnselect: function() {
            $("#btn-delete").attr('disabled',"true");
            $operatorProperties.hide();
            return true;
        },
        onLinkSelect: function(linkId) {
            $("#btn-delete").removeAttr("disabled");
            $linkProperties.show();
            $linkTitle.val($dfd1.flowchart('getLinkTitle', linkId));
            return true;
        },
        onLinkUnselect: function() {
            $("#btn-delete").attr('disabled',"true");
            $linkProperties.hide();
            return true;
        }
    });
    //默认新增了一个节点
    initTop1 = initTop1 + 20;
    initLeft1 = initLeft1 + 20;
    operatorI++;

    $operatorTitle.keyup(function() {
        var selectedOperatorId = $dfd1.flowchart('getSelectedOperatorId');
        if (selectedOperatorId != null) {
            $dfd1.flowchart('setOperatorTitle', selectedOperatorId, $operatorTitle.val());
        }
    });
    $linkTitle.keyup(function() {
        var selectedLinkId = $dfd1.flowchart('getSelectedLinkId');
        if (selectedLinkId != null) {
            $dfd1.flowchart('setLinkTitle', selectedLinkId, $linkTitle.val());
        }
    });

    //图2
    var initTop2 = 20;
    var initLeft2 = 20;
    var data = {
        operators: {
            o2: {
                top: initTop2,
                left: initLeft2,
                properties: {
                    title: 'node' + operatorI,
                    inputs: {
                        inp: {
                            label: 'In',
                            multiple: true
                        }
                    },
                    outputs: {
                        outp: {
                            label: 'Out',
                            multiple: true
                        }
                    }
                }
            }
        },
        links: {}
    };
    var $dfd2 = $('#flowchartdiv2');
    $dfd2.flowchart({
        data: data,
        //这四个函数在这里设置是要保持对operator_properties、link_properties等元素的操作
        onOperatorSelect: function(operatorId) {
            $("#btn-delete").removeAttr("disabled");
            $operatorProperties.show();
            $operatorTitle.val($dfd2.flowchart('getOperatorTitle', operatorId));
            return true;
        },
        onOperatorUnselect: function() {
            $("#btn-delete").attr('disabled',"true");
            $operatorProperties.hide();
            return true;
        },
        onLinkSelect: function(linkId) {
            $("#btn-delete").removeAttr("disabled");
            $linkProperties.show();
            $linkTitle.val($dfd2.flowchart('getLinkTitle', linkId));
            return true;
        },
        onLinkUnselect: function() {
            $("#btn-delete").attr('disabled',"true");
            $linkProperties.hide();
            return true;
        }
    });
    //默认新增了一个节点
    initTop2 = initTop2 + 20;
    initLeft2 = initLeft2 + 20;
    operatorI++;

    $operatorTitle.keyup(function() {
        var selectedOperatorId = $dfd2.flowchart('getSelectedOperatorId');
        if (selectedOperatorId != null) {
            $dfd2.flowchart('setOperatorTitle', selectedOperatorId, $operatorTitle.val());
        }
    });
    $linkTitle.keyup(function() {
        var selectedLinkId = $dfd2.flowchart('getSelectedLinkId');
        if (selectedLinkId != null) {
            $dfd2.flowchart('setLinkTitle', selectedLinkId, $linkTitle.val());
        }
    });


    //Button事件
    //这里给button绑定事件和时间处理函数

    //btn-new1
    $("#btn-new1").click(function() {
        var operatorId = 'o' + operatorI;
        var operatorData = {
            top: initTop1,
            left: initLeft1,
            properties: {
                title: 'node' + operatorI,
                inputs: {
                    inp: {
                        label: 'In',
                        multiple: true
                    }
                },
                outputs: {
                    outp: {
                        label: 'Out',
                        multiple: true
                    }
                }
            }
        };

        //新增了一个节点后改变这些基础计数
        initTop1 = initTop1 + 20;
        initLeft1 = initLeft1 + 20;
        operatorI++;

        $dfd1.flowchart('createOperator', operatorId, operatorData);
    });

    //btn-new2
    $("#btn-new2").click(function() {
        var operatorId = 'o' + operatorI;
        var operatorData = {
            top: initTop2,
            left: initLeft2,
            properties: {
                title: 'node' + operatorI,
                inputs: {
                    inp: {
                        label: 'In',
                        multiple: true
                    }
                },
                outputs: {
                    outp: {
                        label: 'Out',
                        multiple: true
                    }
                }
            }
        };

        //新增了一个节点后改变这些基础计数
        initTop2 = initTop2 + 20;
        initLeft2 = initLeft2 + 20;
        operatorI++;

        $dfd2.flowchart('createOperator', operatorId, operatorData);
    });

    //btn-delete
    $("#btn-delete").attr('disabled',"true");
    $("#btn-delete").click(function() {
        $dfd1.flowchart('deleteSelected');
        $dfd2.flowchart('deleteSelected');
    });

    //初始默认为OO模式
    $("#btn-OO").addClass("btn-info");

    //btn-OOOMMO
    $("#btn-OO").click(function() {
        $("#btn-OO").addClass("btn-info");
        $("#btn-OM").removeClass("btn-info");
        $("#btn-MO").removeClass("btn-info");
        $dfd1.flowchart('linkdone');
        $dfd2.flowchart('linkdone');
        $dfd1.flowchart('mode1');
        $dfd2.flowchart('mode1');
    });

    $("#btn-OM").click(function() {
        $("#btn-OO").removeClass("btn-info");
        $("#btn-OM").addClass("btn-info");
        $("#btn-MO").removeClass("btn-info");
        $dfd1.flowchart('linkdone');
        $dfd2.flowchart('linkdone');
        $dfd1.flowchart('mode2');
        $dfd2.flowchart('mode2');
    });

    $("#btn-MO").click(function() {
        $("#btn-OO").removeClass("btn-info");
        $("#btn-OM").removeClass("btn-info");
        $("#btn-MO").addClass("btn-info");
        $dfd1.flowchart('linkdone');
        $dfd2.flowchart('linkdone');
        $dfd1.flowchart('mode3');
        $dfd2.flowchart('mode3');
    });

    //btn-submit
    $("#btn-submit").click(function() {
        $dfd1.flowchart('submit');
        $dfd2.flowchart('submit');
    });
});
