import { UUID } from "@/types";

export interface BasicStructureInit {
    id: UUID;
    name: string;
    description: string;
    creator: string;
    created: Date;
    updated: Date;
    lastModifier: string;
    tags: string[];
}

export abstract class BasicStructure {
    id: UUID;
    name: string;
    description: string;
    creator: string;
    created: Date;
    updated: Date;
    lastModifier: string;
    tags: string[];

    constructor(init: BasicStructureInit) {
        this.id = init.id;
        this.name = init.name;
        this.description = init.description;
        this.creator = init.creator;
        this.created = init.created;
        this.updated = init.updated;
        this.lastModifier = init.lastModifier;
        this.tags = init.tags;
    }
}

export interface ItemInit extends BasicStructureInit {}

export class Item extends BasicStructure {}

export interface RecordInit extends BasicStructureInit {
    category: string;
}

export class Record extends BasicStructure {
    category: string;

    constructor(init: BasicStructureInit & { category: string }) {
        super(init);
        this.category = init.category;
    }
}

export interface RepositoryInit extends BasicStructureInit {}

export class Repository extends BasicStructure {}

export interface ArchiveInit extends BasicStructureInit {}

export class Archive extends BasicStructure {}
