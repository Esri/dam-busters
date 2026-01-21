# Dam Busters

![Breaking the dams](./public/assets/story_thumbnail.png)

The story of the daring raid on Germany’s dams in May 1943, exploring 617 Squadron’s mission, its engineering, and its lasting impact.

Using ArcGIS StoryMaps and embedded maps created with the [ArcGIS Maps SDK for JavaScript](https://developers.arcgis.com/javascript/latest/) this repo demonstrates an example of a customized scrollytelling application that employs scroll-driven map choreography.

<a href="https://esri.github.io/dam-busters/" target="_blank">View it live</a>

## Features

* Embeds story in webpage using [script-embed workflow](https://www.esri.com/arcgis-blog/products/arcgis-storymaps/constituent-engagement/introducing-story-embeds-via-script)
* Scroll-driven [map choreography](https://www.esri.com/arcgis-blog/products/arcgis-storymaps/mapping/choreograph-your-maps-with-arcgis-storymaps)
* Iframe integration - Seamlessly embeds and manipulates maps created with the ArcGIS Maps SDK for JavaScript within ArcGIS StoryMaps via postMessage communication
* Responsive viewport calculation - Accurate scroll progress accounting for different screen sizes

## Instructions
1. **Clone the repository**
   ```bash
   git clone https://github.com/Esri/dam-busters.git
   cd dam-busters
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Main application: `http://localhost:5173`
   - Embedded map display: `http://localhost:5173/map/`

## Requirements

### Technical Requirements
- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Modern web browser** (Chrome, Firefox, Safari, Edge)

### For ArcGIS StoryMaps Integration
- **ArcGIS Online account** or **ArcGIS Enterprise**
- **StoryMaps authoring privileges**

### Optional but Recommended
- **Git** for version control
- **VS Code** or similar code editor

## Resources

* [Introducing Story Embeds via Script!](https://www.esri.com/arcgis-blog/products/arcgis-storymaps/constituent-engagement/introducing-story-embeds-via-script) - ArcGIS Blog post explaining the script embedding technique used in this project.
* [Storytelling with 3d models](https://www.esri.com/arcgis-blog/products/arcgis-storymaps/constituent-engagement/storytelling-with-3d-models)
* [3D object layer](https://www.esri.com/arcgis-blog/products/arcgis-online/3d-gis/3d-object-layer-a-comprehensive-overview)

## Issues

Find a bug or want to request a new feature?  Please let us know by submitting an issue.

## Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/esri/contributing).

## Licensing

Copyright 2026 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [LICENSE.txt](LICENSE.txt?raw=true) file.