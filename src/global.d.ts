/*
 * Global type declarations for Archives-Core project.
 *
 * This file contains global type declarations and ambient module declarations
 * that are available throughout the project.
 *
 * Copyright (c) 2015-2025 Yuba Technology. All rights reserved.
 * This file is a collaborative effort of the Yuba Technology team
 * and all contributors to the Archives-Core project.
 *
 * Licensed under the AGPLv3 license.
 */

import { UUID } from "./types/Identifiers";

declare global {
    // The runtime environment of the project. Provided when compiling the project.
    declare const RUNTIME: "node" | "browser";

    // Redeclare the UUID v4 function to return the UUID type (before it was a string).
    declare module "uuid" {
        function v4(): UUID;
    }
}
