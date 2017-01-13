var operatorI = 1;
var initTop1 = 20;
var initLeft1 = 20;
var initTop2 = 20;
var initLeft2 = 20;

function initFlowchart() {
    //初始化流图输入部分

    //这里定义要操纵的元素
    var $operatorProperties = $('#operator_properties');
    var $linkProperties = $('#link_properties');
    var $operatorTitle = $('#operator_title');
    var $linkTitle = $('#link_title');
    var $deleteButton = $('#btn-delete');
    var $dfd1 = $('#flowchartdiv1');
    var $dfd2 = $('#flowchartdiv2');

    //两个图的接口设置
    //############################################################
    //############################################################
    var interface1 = {
        onOperatorSelect: function(operatorId) {
            $deleteButton.removeAttr("disabled");
            $operatorProperties.show();
            $operatorTitle.val($dfd1.flowchart('getOperatorTitle', operatorId));
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
            $linkTitle.val($dfd1.flowchart('getLinkTitle', linkId));
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
            $operatorTitle.val($dfd2.flowchart('getOperatorTitle', operatorId));
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
            $linkTitle.val($dfd2.flowchart('getLinkTitle', linkId));
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
    $dfd1.flowchart({
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

    $dfd2.flowchart({
        data: data,
        interFace: interface2,
    });
    //默认新增了一个节点
    initTop2 = initTop2 + 20;
    initLeft2 = initLeft2 + 20;
    operatorI++;

    //设置node和link的名字更改
    $operatorTitle.keyup(function() {
        var selectedOperatorId1 = $dfd1.flowchart('getSelectedOperatorId');
        if (selectedOperatorId1 != null) {
            $dfd1.flowchart('setOperatorTitle', selectedOperatorId1, $operatorTitle.val());
        }
        var selectedOperatorId2 = $dfd2.flowchart('getSelectedOperatorId');
        if (selectedOperatorId2 != null) {
            $dfd2.flowchart('setOperatorTitle', selectedOperatorId2, $operatorTitle.val());
        }
    });
    $linkTitle.keyup(function() {
        var selectedLinkId1 = $dfd1.flowchart('getSelectedLinkId');
        if (selectedLinkId1 != null) {
            $dfd1.flowchart('setLinkTitle', selectedLinkId1, $linkTitle.val());
        }
        var selectedLinkId2 = $dfd2.flowchart('getSelectedLinkId');
        if (selectedLinkId2 != null) {
            $dfd2.flowchart('setLinkTitle', selectedLinkId2, $linkTitle.val());
        }
    });
}

//新建节点1
function newNode1() {
    var $dfd1 = $('#flowchartdiv1');
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
}

//新建节点2
function newNode2() {
    var $dfd2 = $('#flowchartdiv2');
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
}

//
function delNodeOrLink() {
    var $dfd1 = $('#flowchartdiv1');
    var $dfd2 = $('#flowchartdiv2');
    $dfd1.flowchart('deleteSelected');
    $dfd2.flowchart('deleteSelected');
}

//
function mode1Choosen() {
    var $dfd1 = $('#flowchartdiv1');
    var $dfd2 = $('#flowchartdiv2');
    $dfd1.flowchart('linkdone');
    $dfd2.flowchart('linkdone');
    $dfd1.flowchart('mode1');
    $dfd2.flowchart('mode1');
}

//
function mode2Choosen() {
    var $dfd1 = $('#flowchartdiv1');
    var $dfd2 = $('#flowchartdiv2');
    $dfd1.flowchart('linkdone');
    $dfd2.flowchart('linkdone');
    $dfd1.flowchart('mode2');
    $dfd2.flowchart('mode2');
}

//
function mode3Choosen() {
    var $dfd1 = $('#flowchartdiv1');
    var $dfd2 = $('#flowchartdiv2');
    $dfd1.flowchart('linkdone');
    $dfd2.flowchart('linkdone');
    $dfd1.flowchart('mode3');
    $dfd2.flowchart('mode3');
}

function flowChartSubmit() {
    var $dfd1 = $('#flowchartdiv1');
    var $dfd2 = $('#flowchartdiv2');
    $dfd1.flowchart('submit');
    $dfd2.flowchart('submit');
}
