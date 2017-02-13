var operatorI = 1;
var initTop1 = 20;
var initLeft1 = 20;
var initTop2 = 20;
var initLeft2 = 20;

var ansObj = {};

function initFlowchart() {
    //初始化流图输入部分

    //这里定义要操纵的元素
    var $operatorProperties = $('#operator_properties');
    var $linkProperties = $('#link_properties');
    var $operatorTitle = $('#operator_title');
    var $linkTitle = $('#link_title');
    var $deleteButton = $('#btn-delete');

    //两个图的接口设置
    //############################################################
    //############################################################
    var interface1 = {
        onOperatorSelect: function(operatorId) {
            $deleteButton.removeAttr("disabled");
            $operatorProperties.show();
            $operatorTitle.val($('#flowchartdiv1').flowchart('getOperatorTitle', operatorId));
            return true;
        },
        onOperatorUnselect: function() {
            $deleteButton.attr('disabled', "true");
            $operatorProperties.hide();
            return true;
        },
        onLinkSelect: function(linkId) {
            $deleteButton.removeAttr("disabled");
            $linkProperties.show();
            $linkTitle.val($('#flowchartdiv1').flowchart('getLinkTitle', linkId));
            return true;
        },
        onLinkUnselect: function() {
            $deleteButton.attr('disabled', "true");
            $linkProperties.hide();
            return true;
        },
        showTips: function(tipStr) {
            ShowTips(tipStr);
        }
    };
    var interface2 = {
        onOperatorSelect: function(operatorId) {
            $("#btn-delete").removeAttr("disabled");
            $operatorProperties.show();
            $operatorTitle.val($('#flowchartdiv2').flowchart('getOperatorTitle', operatorId));
            return true;
        },
        onOperatorUnselect: function() {
            $("#btn-delete").attr('disabled', "true");
            $operatorProperties.hide();
            return true;
        },
        onLinkSelect: function(linkId) {
            $("#btn-delete").removeAttr("disabled");
            $linkProperties.show();
            $linkTitle.val($('#flowchartdiv2').flowchart('getLinkTitle', linkId));
            return true;
        },
        onLinkUnselect: function() {
            $("#btn-delete").attr('disabled', "true");
            $linkProperties.hide();
            return true;
        },
        showTips: function(tipStr) {
            ShowTips(tipStr);
        }
    };
    //############################################################
    //############################################################

    //图1默认一个节点
    var data = {
        operators: {
            o1: {
                top: initTop1,
                left: initLeft1,
                properties: {
                    title: 'NODE' + operatorI,
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
    $('#flowchartdiv1').flowchart({
        data: data,
        interFace: interface1,
    });
    //默认新增了一个节点
    initTop1 = initTop1 + 20;
    initLeft1 = initLeft1 + 20;
    operatorI++;

    //图2默认一个节点
    var data = {
        operators: {
            o2: {
                top: initTop2,
                left: initLeft2,
                properties: {
                    title: 'NODE' + operatorI,
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

    $('#flowchartdiv2').flowchart({
        data: data,
        interFace: interface2,
    });
    //默认新增了一个节点
    initTop2 = initTop2 + 20;
    initLeft2 = initLeft2 + 20;
    operatorI++;

    //设置node和link的名字更改
    $operatorTitle.keyup(function() {
        var selectedOperatorId1 = $('#flowchartdiv1').flowchart('getSelectedOperatorId');
        if (selectedOperatorId1 != null) {
            $('#flowchartdiv1').flowchart('setOperatorTitle', selectedOperatorId1, $operatorTitle.val());
        }
        var selectedOperatorId2 = $('#flowchartdiv2').flowchart('getSelectedOperatorId');
        if (selectedOperatorId2 != null) {
            $('#flowchartdiv2').flowchart('setOperatorTitle', selectedOperatorId2, $operatorTitle.val());
        }
    });
    $linkTitle.keyup(function() {
        var selectedLinkId1 = $('#flowchartdiv1').flowchart('getSelectedLinkId');
        if (selectedLinkId1 != null) {
            $('#flowchartdiv1').flowchart('setLinkTitle', selectedLinkId1, $linkTitle.val());
        }
        var selectedLinkId2 = $('#flowchartdiv2').flowchart('getSelectedLinkId');
        if (selectedLinkId2 != null) {
            $('#flowchartdiv2').flowchart('setLinkTitle', selectedLinkId2, $linkTitle.val());
        }
    });
}

//新建节点1
function newNode1() {
    var operatorId = 'o' + operatorI;
    var operatorData = {
        top: initTop1,
        left: initLeft1,
        properties: {
            title: 'NODE' + operatorI,
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

    $('#flowchartdiv1').flowchart('createOperator', operatorId, operatorData);
}

//新建节点2
function newNode2() {
    var operatorId = 'o' + operatorI;
    var operatorData = {
        top: initTop2,
        left: initLeft2,
        properties: {
            title: 'NODE' + operatorI,
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

    $('#flowchartdiv2').flowchart('createOperator', operatorId, operatorData);
}

//
function delNodeOrLink() {
    $('#flowchartdiv1').flowchart('deleteSelected');
    $('#flowchartdiv2').flowchart('deleteSelected');
}

//
function mode1Choosen() {
    $('#flowchartdiv1').flowchart('linkdone');
    $('#flowchartdiv2').flowchart('linkdone');
    $('#flowchartdiv1').flowchart('mode1');
    $('#flowchartdiv2').flowchart('mode1');
}

//
function mode2Choosen() {
    $('#flowchartdiv1').flowchart('linkdone');
    $('#flowchartdiv2').flowchart('linkdone');
    $('#flowchartdiv1').flowchart('mode2');
    $('#flowchartdiv2').flowchart('mode2');
}

//
function mode3Choosen() {
    $('#flowchartdiv1').flowchart('linkdone');
    $('#flowchartdiv2').flowchart('linkdone');
    $('#flowchartdiv1').flowchart('mode3');
    $('#flowchartdiv2').flowchart('mode3');
}

function flowChartSubmit() {
    var ans1 = $.extend(true, {}, $('#flowchartdiv1').flowchart('submit'));
    if (ans1 == 0)
        console.log("******************** bad DFD ********************");
    else {
        ans1.ans.DFDID = 1;
        console.log("***DFDID***");
        console.log(ans1.ans.DFDID);
        console.log("******************** good DFD ********************");
    }

    var ans2 = $.extend(true, {}, $('#flowchartdiv2').flowchart('submit'));
    if (ans2 == 0)
        console.log("******************** bad DFD ********************");
    else {
        ans2.ans.DFDID = 2;
        console.log("***DFDID***");
        console.log(ans2.ans.DFDID);
        console.log("******************** good DFD ********************");
    }

    //这里return ans1 和 ans2
    //还要返回两个图的名字和ID的字典
    if (ans1 != 0 && ans2 != 0) {
        var ansObjtoServer = {};
        ansObjtoServer.dfdDefine1 = ans1.ans;
        ansObjtoServer.dfdDefine2 = ans2.ans;
        ansObjtoServer.dic1 = ans1.dic;
        ansObjtoServer.dic2 = ans2.dic;

        return ansObjtoServer;
    } else
        return 0;
}

//控制接口
/*
// 控制连线及其名称颜色变化的接口
colorizeLink: function(linkId, color)
// 控制连线及其名称颜色还原的接口
unColorizeLink: function(linkId)
// 控制 operator 边框颜色的接口
colorOperator: function(operatorId, color)
// 控制 operator 边框颜色还原的接口
unColorOperator: function(operatorId)
*/

//图1
function dfd1ColorizeLink(linkId, color) {
    $('#flowchartdiv1').flowchart('colorizeLink', linkId, color);
}

function dfd1UnColorizeLink(linkId) {
    $('#flowchartdiv1').flowchart('unColorizeLink', linkId);
}

function dfd1ColorOperator(operatorId, color) {
    $('#flowchartdiv1').flowchart('colorOperator', operatorId, color);
}

function dfd1UnColorOperator(operatorId) {
    $('#flowchartdiv1').flowchart('unColorOperator', operatorId);
}

//图2
function dfd2ColorizeLink(linkId, color) {
    $('#flowchartdiv2').flowchart('colorizeLink', linkId, color);
}

function dfd2UnColorizeLink(linkId) {
    $('#flowchartdiv2').flowchart('unColorizeLink', linkId);
}

function dfd2ColorOperator(operatorId, color) {
    $('#flowchartdiv2').flowchart('colorOperator', operatorId, color);
}

function dfd2UnColorOperator(operatorId) {
    $('#flowchartdiv2').flowchart('unColorOperator', operatorId);
}
