Ext.onReady(function () {

    // The data store containing the list of states
    var states = Ext.create('Ext.data.Store', {
        fields: ['abbr', 'name'],
        data: [
            {
                "abbr": "AL",
                "name": "Alabama"
            },
            {
                "abbr": "AK",
                "name": "Alaska"
            },
            {
                "abbr": "AZ",
                "name": "Arizona"
            }
        ]
    });


// Create the combo box, attached to the states data store
    let cb = Ext.create('Ext.form.ComboBox', {
        fieldLabel: 'Choose State',
        store: states,
        queryMode: 'local',
        displayField: 'abbr',
        valueField: 'name',
        emptyText:'请选择',
        renderTo: Ext.getBody(),
        listeners: {
            scope:this,
            select:function (combo,record,index) {

                alert(record.get('name'));
                alert(record.get('abbr'));

                let result = states.getAt(0);
                console.log(result);

                let abbr = result.data.abbr;
                console.log(abbr);
            }
        }
    });

});