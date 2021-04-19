import React from 'react';
import parse from 'html-react-parser';
import {Table} from 'react-bootstrap'


function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      semester: this.props.semester,
      days: ["Mon", "Tues", "Wed", "Thrs", "Fri"],
      times: ["9:00","9:30", "10:00", "10:30", "11:00", 
          "11:30", "12:00", "12:30", "1:00", "1:30", "2:00", "2:30", 
          "3:00", "3:30", "4:00"],

      classes: this.props.classes
      };
    }

    getClass(start_time, day) {
      for(const cl of this.state.classes) {
        if (cl.start_time === start_time && cl.days.includes(day)) return cl;
      }
      return null;
    }

    createHTML() {
      let html = '<div class="schedule-table" style="margin:0px">';
      html += '<h2 className="h2.schedule-header-no-white" style="margin:0;color:white;text-shadow: 2px 2px #140e63;text-align:center">' + this.state.semester.toUpperCase() + '</h2>';
      html += '<br /><div class="table-responsive-sm"></div>';
      html += '<table class="table table-sm table-bordered" style="margin:0">';
      html += '<thead><tr><th width="16%" style="text-align:center">Time</th>';
      // go though each time slot as row
      // create column headers
      this.state.days.forEach(element => {
        html += '<th width="16%" style="text-align:center">' + element + '</th>';
      });
      html += '</tr></thead><tbody>'
      let RowSpanned = {};
      for(const day of this.state.days){
        RowSpanned[day] = [];
      }
      console.log(RowSpanned);
      for(let i=0; i<this.state.times.length; i++) {
        let start_time = this.state.times[i];
        html += '<tr><th style="text-align:center">' + start_time + '</th>'

        //random rgb value for each class (must be in this part of loop)
        let tempcolor = random_rgba()

        for (const day of this.state.days){
          //console.log('matched', oh);
          // check if there's a class during this time
        
        let teach = this.getClass(start_time, day);
        if (teach !== null) {
            for(let count=1; count<teach.row_span; count++)
            RowSpanned[day].push(this.state.times[i+count]);

            html += '<td width="16%" rowspan=' + teach.row_span + ' style="backgroundColor:' + tempcolor + '";' + '>' + 
                    teach.name + '<br />' + teach.loc + '<br />' + teach.time + '</td>';
        }
        else if (!RowSpanned[day].includes(start_time)) {
            html += '<td>&nbsp;</td>';
        }

        }
        html += '</tr>';
      }
      html += '</table></div></div>';
      return parse(html);
    }

    render() {
      return this.createHTML();
    }
}

export default Schedule;