$(document).ready(function() {
    var initTop = 300;
    var initLeft = 100;
    var operatorI = 1;
    var data = {
        operators: {
            operator1: {
                top: initTop,
                left: initLeft,
                properties: {
                    title: 'Operator ' + operatorI,
                    inputs: {
                        ins: {
                            label: 'Input',
                            multiple: true
                        }
                    },
                    outputs: {
                        output_1: {
                            label: 'Output',
                            multiple: true
                        }
                    }
                }
            }
        },
        links: {}
    };

    var $operatorProperties = $('#operator_properties');
    var $linkProperties = $('#link_properties');

    var $operatorTitle = $('#operator_title');
    var $linkTitle = $('#link_title');


    // Apply the plugin on a standard, empty div...
    var $flowchart = $('#example_8');
    $flowchart.flowchart({
        data: data,

        //这四个函数在这里设置是要保持对operator_properties、link_properties等元素的操作
        onOperatorSelect: function(operatorId) {
            $operatorProperties.show();
            $operatorTitle.val($flowchart.flowchart('getOperatorTitle', operatorId));
            return true;
        },
        onOperatorUnselect: function() {
            $operatorProperties.hide();
            return true;
        },
        onLinkSelect: function(linkId) {
            $linkProperties.show();
            $linkTitle.val($flowchart.flowchart('getLinkTitle', linkId));
            return true;
        },
        onLinkUnselect: function() {
            $linkProperties.hide();
            return true;
        }
    });

    initTop = initTop + 20;
    initLeft = initLeft + 20;
    operatorI++;

    $operatorTitle.keyup(function() {
        var selectedOperatorId = $flowchart.flowchart('getSelectedOperatorId');
        if (selectedOperatorId != null) {
            $flowchart.flowchart('setOperatorTitle', selectedOperatorId, $operatorTitle.val());
        }
    });
    $linkTitle.keyup(function() {
        var selectedLinkId = $flowchart.flowchart('getSelectedLinkId');
        if (selectedLinkId != null) {
            $flowchart.flowchart('setLinkTitle', selectedLinkId, $linkTitle.val());
        }
    });

    //.siblings(selector)
    //siblings() 获得匹配集合中每个元素的同胞，通过选择器进行筛选是可选的
    $flowchart.siblings('.create_operator').click(function() {
        var operatorId = 'created_operator_' + operatorI;
        var operatorData = {
            top: initTop,
            left: initLeft,
            properties: {
                title: 'Operator ' + operatorI,
                inputs: {
                    ins: {
                        label: 'Input',
                        multiple: true
                    }
                },
                outputs: {
                    output_1: {
                        label: 'Output',
                        multiple: true
                    }
                }
            }
        };

        initTop = initTop + 20;
        initLeft = initLeft + 20;
        operatorI++;

        $flowchart.flowchart('createOperator', operatorId, operatorData);
    });

    $flowchart.siblings('.delete_selected_button').click(function() {
        $flowchart.flowchart('deleteSelected');
    });

    $flowchart.siblings('.mode_1').click(function() {
        $flowchart.flowchart('mode1');
    });

    $flowchart.siblings('.mode_2').click(function() {
        $flowchart.flowchart('mode2');
    });

    $flowchart.siblings('.mode_3').click(function() {
        $flowchart.flowchart('mode3');
    });

    $flowchart.siblings('.done').click(function() {
        $flowchart.flowchart('linkdone');
    });

    $flowchart.siblings('.submit').click(function() {
        $flowchart.flowchart('submit');
    });
});
