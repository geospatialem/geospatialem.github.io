import { Component, OnInit } from '@angular/core';

// ArcGIS Core
import esriConfig from "@arcgis/core/config.js";
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import Home from "@arcgis/core/widgets/Home";
import Graphic from '@arcgis/core/Graphic';
import TimeSlider from '@arcgis/core/widgets/TimeSlider'
import * as watchUtils from "@arcgis/core/core/watchUtils";


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {

  // Map
  map: any;
  mapView: any;
  locationGraphic: any;
  timeSlider: any;

  // Slider button text
  playStatus = 'Play';

  // Table columns
  locationItemsColumns: string[] = ['name', 'location', 'timeLength'];

  // List items
  locationItems = [
    {
      "name": "Gustavus Adolphus College",
      "desc": "B.A., Geography, Individual Studies",
      "img": "gustavus.jpg",
      "location": "St. Peter, Minnesota",
      "timeStart": "08/01/2003",
      "timeEnd": "05/31/2007",
      "timeText": "August 2003 — May 2007",
      "lat": 44.3228,
      "lng": -93.9703
    },
    {
      "name": "St. Mary's University of Minnesota",
      "desc": "M.S., Geographic Information Science",
      "img": "stmarysmn.jpg",
      "location": "Winona, Minnesota",
      "timeStart": "08/01/2007",
      "timeEnd": "12/31/2009",
      "timeText": "August 2007 — December 2009",
      "lat": 44.0467,
      "lng": -91.6954
    },
    {
      "name": "Minnesota Department of Transportation",
      "desc": "GIS Intern",
      "img": "mndot.jpg",
      "location": "Roseville, Minnesota",
      "timeStart": "10/01/2007",
      "timeEnd": "05/31/2009",
      "timeText": "October 2007 — June 2009",
      "lat": 45.0120,
      "lng": -93.1640
    },
    {
      "name": "Hennepin County",
      "desc": "GIS Intern",
      "img": "hennepin.png",
      "location": "Minneapolis, Minnesota",
      "timeStart": "11/01/2008",
      "timeEnd": "05/31/2009",
      "timeText": "November 2008 — June 2009",
      "lat": 44.9833,
      "lng": -93.2789
    },
    {
      "name": "Hennepin County",
      "desc": "GIS Specialist",
      "img": "hennepin.png",
      "location": "Medina, Minnesota",
      "timeStart": "06/01/2009",
      "timeEnd": "11/30/2010",
      "timeText": "June 2009 — December 2010",
      "lat": 45.0486,
      "lng": -93.5676
    },
    {
      "name": "City of Brooklyn Park",
      "desc": "GIS Specialist",
      "img": "brooklynpark.png",
      "location": "Brooklyn Park, Minnesota",
      "timeStart": "12/01/2010",
      "timeEnd": "09/30/2011",
      "timeText": "December 2010 — October 2011",
      "lat": 45.1095,
      "lng": -93.3472
    },
    {
      "name": "Hennepin County",
      "desc": "GIS Coordinator",
      "img": "hennepin.png",
      "location": "Medina, Minnesota",
      "timeStart": "10/01/2011",
      "timeEnd": "05/31/2013",
      "timeText": "October 2011 — June 2013",
      "lat": 45.0486,
      "lng": -93.5676
    },
    {
      "name": "Minnesota IT Services partnering with Department of Health",
      "desc": "GIS Developer",
      "img": "mnhealth.png",
      "location": "St. Paul, Minnesota",
      "timeStart": "06/01/2013",
      "timeEnd": "10/30/2016",
      "timeText": "June 2013 — November 2016",
      "lat": 44.9540,
      "lng": -93.0981
    },
    {
      "name": "Minnesota IT Services partnering with Department of Natural Resources",
      "desc": "GIS Developer",
      "img": "mndnr.png",
      "location": "St. Paul, Minnesota",
      "timeStart": "11/01/2016",
      "timeEnd": "02/28/2020",
      "timeText": "November 2016 — March 2020",
      "lat": 44.9563,
      "lng": -93.0842
    },
    {
      "name": "Minnesota IT Services partnering with Department of Natural Resources",
      "desc": "Lead GIS Developer",
      "img": "mndnr.png",
      "location": "St. Paul, Minnesota",
      "timeStart": "03/01/2020",
      "timeEnd": "02/28/2022",
      "timeText": "March 2020 — March 2022",
      "lat": 44.9563,
      "lng": -93.0842
    },
    { 
      "name": "Esri", 
      "desc": "Senior Product Engineer", 
      "img": "esri.jpg",
      "location": "Minneapolis, Minnesota",
      "timeStart": "03/01/2022",
      "timeEnd": "12/31/2024",
      "timeText": "March 2022 — January 2025",
      "lat": 44.9808,
      "lng": -93.2533 
    },
    { 
      "name": "Esri", 
      "desc": "Principal Product Engineer", 
      "img": "esri.jpg",
      "location": "Minneapolis, Minnesota",
      "timeStart": "01/01/2025",
      "timeEnd": "",
      "timeText": "January 2025 — Present",
      "lat": 44.9808,
      "lng": -93.2533 
    }
  ];

  constructor() { 
    esriConfig.assetsPath = "./assets";
  }

  ngOnInit() {
    this.loadMap();
  }

  // Load map features
  loadMap() {
    this.map = new Map({
      basemap: "gray-vector"
    });

    this.mapView = new MapView({
      center: [-94, 46],
      container: "viewDiv",
      map: this.map,
      zoom: 5
    });

    this.loadHomeWidget(); // Home widget
    this.loadTimeSlider(); // Timeslider widget
  }

  /* Home widget */
  loadHomeWidget() {
    let homeBtn = new Home({
      view: this.mapView,
      container: document.createElement("div")
    });

    this.mapView.ui.add(homeBtn, { position: 'top-left' });
  }


  /* Time slider widget */
  loadTimeSlider() {

    // Set Timeslider end date
    let endTimeDate = new Date();
    endTimeDate.setMonth(endTimeDate.getMonth() + 1); // Current date + 1 month
    endTimeDate.setHours(0, 0, 0, 0); // Set time to 00:00

    this.timeSlider = new TimeSlider({
      container: "timeSlider",
      layout: "compact",
      playRate: 2000,
      fullTimeExtent: {
        start: new Date(2003, 0, 1),
        end: endTimeDate
      },
      timeExtent: {
        start: new Date(2003, 0, 1),
        end: new Date(2003, 7, 1)
      },
      mode: 'cumulative-from-start',
      stops: {
        dates: [
          new Date(2003, 8, 1), 
          new Date(2007, 8, 1), 
          new Date(2007, 9, 1),
          new Date(2008, 10, 1),
          new Date(2009, 5, 1),
          new Date(2010, 12, 1),
          new Date(2011, 10, 1),
          new Date(2013, 6, 1),
          new Date(2016, 11, 1),
          new Date(2020, 3, 1),
          new Date(2022, 3, 1),
          new Date(2025, 1, 1)
        ]
      }
    });

    /* Watch for time slider change event and add graphics to the map */
    watchUtils.watch(this.timeSlider, 'timeExtent', (result) => {

      // Clear graphics and popup
      this.mapView.graphics.removeAll();
      this.mapView.popup.close();

      // If dates align, load the graphic into the map
      for (var i = 0; i < this.locationItems.length; i++) {
        if (new Date(this.locationItems[i].timeStart) <= result.end && new Date(this.locationItems[i].timeStart) <= result.end) {
          this.loadGraphic(this.locationItems[i]);
        }
    }
    });
  }

  /* Load graphic to map */
  loadGraphic(locationInfo: any) {

    // Point location
    let geomPoint = {
      type: "point",
      latitude: locationInfo.lat,
      longitude: locationInfo.lng
    };

    // Color symbol
    let colorSymb = {
      type: "simple-marker",
      color: [224, 84, 33],
      outline: {
        color: [207, 211, 212],
        width: 2
      }
    };

    // Graphic
    this.locationGraphic = new Graphic({
      geometry: geomPoint as any,
      symbol: colorSymb,
      popupTemplate: {
        "title": locationInfo.desc, // Degree / Position
        "content": 
          "<img src=" + window.location.origin + "/assets/logos/" + locationInfo.img + " alt='" + locationInfo.name + " logo' width='20px' height='20px' />&nbsp;" + // Image     
          "<b>" + locationInfo.name + "</b> (" + // School / Organization
          locationInfo.location + ")<br>" + // City, State
          locationInfo.timeText // Timeline
      }
    });

    // Add graphic to view
    this.mapView.graphics.add(this.locationGraphic);

    // Open popup by default
    this.mapView.popup.open({
      features: [this.locationGraphic],
      location: this.locationGraphic.geometry
    });
  }

  // Start/Stop time slider with button
  playTime() {
    if (this.playStatus === 'Play') {
      this.playStatus = 'Pause';
      this.timeSlider.play();
    } else {
      this.playStatus = 'Play';
      this.timeSlider.stop();
    }
  }

}
