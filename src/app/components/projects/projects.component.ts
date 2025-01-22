import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  flexPct = '50%';

  projects = [
    { "name": "Accessible Web Apps with Maps SDK for JS and Calcite", 
      "url": "https://geospatialem.github.io/build-a11y-web-maps-sdk-js-calcite-ds-2024/", 
      "img": "highcontrast.png", 
      "desc": "A set of apps built with accessibility in mind with Maps SDK for JavaScript and Calcite Design System at the 2024 Esri Developer Summit. Includes samples on high contrast support, consistent focus, map description and live regions, and reduced motion. Co-presented with Kelly Hutchins." 
    },
    { "name": "Calcite Accessibiity Audit Samples", 
      "url": "https://geospatialem.github.io/calcite-samples/", 
      "img": "calcitesamples.png", 
      "desc": "Calcite Design System's component samples containing multiple configurations. Created for accessibility testing for a third party vendor accessibility audit conducted in 2022 for Calcite's Accessibility Conformance Report delivery." 
    },
    { 
      "name": "Watershed Health Assessment Framework", 
      "url": "https://arcgis.dnr.state.mn.us/ewr/whaf2", 
      "img": "whaf.png", 
      "desc": "The Watershed Health Assessment Framework (WHAF) provides an organized approach for understanding natural resource conditions and challenges, and for identifying opportunities to improve the health and resilience of Minnesota’s watersheds."
    },
    {
      "name": "Watershed Health: Land Cover",
      "url": "https://arcgis.dnr.state.mn.us/ewr/whaflanduse",
      "img": "whafland.png",
      "desc": "Provides access to consistent summaries of land cover data in Minnesota enabling decision makers to review past and present land cover data. The data and charts inform the distribution of habitats and uses that comprise Minnesota’s landscape."
    },
    { 
      "name": "Mobile Maps (GeoPDF) Downloader",
      "url": "https://arcgis.dnr.state.mn.us/gis/pdf",
      "img": "geopdf.png",
      "desc": "An app to download recreation maps in Geospatial PDF (GeoPDF) format. GeoPDFs can be viewed and printed at home the same as standard PDFs, but also contain geospatial coordinate information. Users can view these maps on any mobile device to see their current location relative to the map."
    },
    {
      "name": "Free & Reduced Price Lunch (FRPL)",
      "url": "https://mndatamaps.web.health.state.mn.us/interactive/frpl.html",
      "img": "frpl.png",
      "desc": "Children in lower income households face higher rates of dental disease and other health conditions than those in higher income households. Free and reduced price lunch eligibility is used as an alternative measure to identify the percentage of children within public schools from lower income households."
    },
    { 
      "name": "2018 MN GIS/LIS Conference Map",
      "url": "https://geospatialem.github.io/conference-map",
      "img": "confmap.png",
      "desc": "The official conference map for the 28th Annual Minnesota GIS/LIS Conference held Wednesday, October 3rd through Friday, October 5th, 2018 in Duluth, Minnesota. Includes conferences activities during the day, and geo-related events and locations throughout the city to explore!"  
    },
    { 
      "name": "World Travel Highlights",
      "url": "https://geospatialem.github.io/world-travels",
      "img": "worldtravel.png",
      "desc": "What do cartographers do when they travel the globe? They take photos, detailed notes, and sometimes get the exact coordinates of where they went and put it all together! This interactive map showcases travels my husband and I have experienced around the globe together!"
    },
    { 
      "name": "Places to Visit",
      "url": "https://geospatialem.github.io/places",
      "img": "places.png",
      "desc": "A map comprised of a collection of places to visit among my two passions - Major League Baseball (MLB) stadiums with my husband, and Minnesota's State Parks, Recreation Areas, and State Waysides. Each point is depicted with a status of visited, planned and remaining."  
    },
    { 
      "name": "Minnesota GIS/LIS Attendees",
      "url": "https://geospatialem.github.io/mngislis-attendees",
      "img": "mngislis.png",
      "desc": "A spatially centered application detailing conference attendees from past Minnesota GIS/LIS Consortium Conferences from 2007 through 2014. Attendees were captured in individual years, and collectively in the seven year timespan."  
    },  
  ];

  constructor() { }

  ngOnInit() {
    this.flexPct = this.getWindowDimensions();
    window.onresize = () => {
      this.flexPct = this.getWindowDimensions();
    };

  }

  getWindowDimensions(): string {
    const windowWidth = document.documentElement.clientWidth;
    const breakpoint = 950;
    if (windowWidth > breakpoint) {
      return '50%';
    } else {
      return '100%';
    }
  }

}
