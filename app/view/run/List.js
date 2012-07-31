/*
 * File: app/view/run/List.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('JWF.view.run.List', {
    extend: 'Ext.dataview.List',

    config: {
        emptyText: 'Add some Runs, then invite your friends!',
        store: 'Runs',
        disableSelection: true,
        itemTpl: Ext.create('Ext.XTemplate', 
            '<div class="run">',
            '    <img src="https://graph.facebook.com/{profileId}/picture?type=square" />',
            '    <div class="info"><b>{name}</b> jogged <b>{distance} miles</b></div>',
            '    <div class="location">{location}</div>',
            '    <div class="time">{[this.timeAgoInWords(values.date)]}</div>',
            '</div>',
            {
                timeAgoInWords: function(date) {
                    try {
                        var now = Math.ceil(Number(new Date()) / 1000),
                            dateTime = Math.ceil(Number(date) / 1000),
                            diff = now - dateTime,
                            str;

                        if (diff < 0) diff = -diff;

                        if (diff < 86400) {
                            return 'Today';
                        } else if (diff < 60*60*24*365) {
                            str = String(Math.ceil(diff / (60 * 60 * 24)));
                            return str + (str == "1" ? ' day' : ' days') + ' ago';
                        } else {
                            return Ext.Date.format(new Date(date), 'jS M \'y');
                        }
                    } catch(e) {
                        return '';
                    }

                }

            }
        )
    }

});