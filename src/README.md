# src Folder Overview

This folder contains the core source code for the Dam Busters project, a web application that integrates ArcGIS story maps with scroll-driven map choreography.

## Files and Their Roles

- **main.js**: The main entry point of the application. It initializes parallax effects on different scene layers using the simple-parallax-js library, creating a layered scrolling experience.

- **logger.js**: Provides a simple logging utility with a global DEBUG flag. It exports a `log` function that outputs to the console only when debugging is enabled.

- **scrollListener.js**: Handles scroll events to manage the story map's interactive behavior. It tracks scroll direction, current slide, and docking state, enabling scroll-driven transitions between narrative panels.

- **style.css**: Contains CSS styles specific to the components in the src folder, styling the UI elements.

- **configNode.js**: Configuration file for DOM node selection. It defines selectors used to target the `immersive` sidecar block within the story.

- **configStory.js**: Configuration for embedding ArcGIS story maps. It sets up the story ID and root node for the embedded map, and dynamically creates the necessary script tag.

## Configuration Files

### configNode.js

This file exports a `nodeConfig` object with a `nodeSelector` property. The selector is used to identify a specific DOM element within the story relating to the immersive sidecar block (e.g., '#n-qIs6ym') that the application interacts with, such as for animations or event listeners. To reuse this repo, update the `nodeSelector` to match the ID or class of the target element in your story.

### configStory.js

This file configures the embedding of an ArcGIS story map. It defines the `storyId` (a unique identifier for the story map) and the `rootNode` (a CSS selector for the container element). The script generates the embed configuration and appends the necessary script tag to the document body. For reuse, replace the `storyId` with your own ArcGIS story map ID and adjust the `rootNode` selector to point to your desired container element.
