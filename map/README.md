# map Folder Overview

This folder contains the core components for the interactive map functionality in the Dam Busters project. It handles ArcGIS map and scene animations, choreography-driven transitions, and utilities for managing 3D scenes. The map system integrates with scroll and slide events to create dynamic, scroll-driven visualizations.

## Files and Their Roles

- **animateMap.js**: The main module for initializing and controlling map animations. It loads choreography data, configures map and scene components, and orchestrates animations based on user interactions.

- **animateOnScroll.js**: Handles continuous animations triggered by scroll events. It interpolates between viewpoints, time sliders, and environments for smooth transitions during scrolling.

- **animateOnSlide.js**: Manages discrete animations for slide changes. It toggles viewpoints, layer visibility, track renderers, and environments when moving between story slides.

- **configAnimation.js**: Configuration file defining settings for map animations, including map/scene IDs, zoom levels, centers, and paths to choreography data.

- **map.html**: HTML template for the map page, containing containers for the ArcGIS map and scene components, along with a time slider.

- **sceneUtils.js**: Utility functions for managing the lifecycle of 3D scenes, including creation, synchronization, and destruction to optimize performance.

- **style.css**: CSS styles for the map and scene containers, controlling layout, transitions, and visibility.

## Configuration Files

### configAnimation.js

This file exports an `animationConfig` object that centralizes all settings for map animations. Key properties include:

- `maps`: An array of map configurations, each specifying a type (webmap or webscene), itemId, and container element.
- `zoom` and `center`: Default zoom level and center coordinates for the map.
- `timePlayRate`: Playback speed for the time slider.
- `debugMode`: Enables or disables debug logging.
- `disableMapNav`: Controls whether map navigation is disabled.
- `mapFit`: Determines how the map fits the view (e.g., extent).
- `mapChoreography`: Path to the JSON file containing choreography data (see below).
- `goToConfig`: Settings for viewpoint transitions, including animation and duration.

To customize animations, modify these values to match your ArcGIS content and desired behavior.

### mapChoreography.json

Located in the `public` folder, this JSON file defines the choreography for map animations. It is an array of slide objects, each specifying:

- `note`: A descriptive comment for the slide.
- `maps`: Indices of maps/scenes to use (e.g., [0] for 2D map, [1] for 3D scene).
- `viewpoint`: Camera position, scale, and extent for the map view.
- `layerVisibility`: Layers to turn on or off.
- `trackRenderer`: Settings for animating flight tracks or other features.
- Additional properties for time sliders, environments, etc.

This file drives the entire animation sequence, synchronizing map changes with the story narrative. For reuse, create or edit this JSON to define your own animation steps, ensuring the structure matches the expected format.
