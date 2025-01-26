import {
    Item,
    ItemInit,
    Record,
    RecordInit,
    Repository,
    RepositoryInit,
    Archive,
    ArchiveInit,
} from "./DataStructures";
import { UUID } from "@/types";

export class StructureFactory {
    private static instance: StructureFactory;

    static getInstance(): StructureFactory {
        StructureFactory.instance ||= new StructureFactory();
        return StructureFactory.instance;
    }

    // TODO: Implement the following methods
    private async getArchiveInfo(id: UUID): Promise<ArchiveInit> {
        return {
            id,
            name: "Archive",
            description: "This method is not implemented yet!",
            creator: "System",
            created: new Date(),
            updated: new Date(),
            lastModifier: "System",
            tags: ["archive", "not-implemented"],
        };
    }

    public async createArchive(id: UUID): Promise<Archive> {
        const info = await this.getArchiveInfo(id);
        return new Archive(info);
    }

    // TODO: Implement the following methods
    private async getRepositoryInfo(id: UUID): Promise<RepositoryInit> {
        return {
            id,
            name: "Repository",
            description: "This method is not implemented yet!",
            creator: "System",
            created: new Date(),
            updated: new Date(),
            lastModifier: "System",
            tags: ["repository", "not-implemented"],
        };
    }

    public async createRepository(id: UUID): Promise<Repository> {
        const info = await this.getRepositoryInfo(id);
        return new Repository(info);
    }

    // TODO: Implement the following methods
    private async getRecordInfo(id: UUID): Promise<RecordInit> {
        return {
            id,
            name: "Record",
            description: "This method is not implemented yet!",
            category: "Uncategorized",
            creator: "System",
            created: new Date(),
            updated: new Date(),
            lastModifier: "System",
            tags: ["record", "not-implemented"],
        };
    }

    public async createRecord(id: UUID): Promise<Record> {
        const info = await this.getRecordInfo(id);
        return new Record(info);
    }

    // TODO: Implement the following methods
    private async getItemInfo(id: UUID): Promise<ItemInit> {
        return {
            id,
            name: "Item",
            description: "This method is not implemented yet!",
            creator: "System",
            created: new Date(),
            updated: new Date(),
            lastModifier: "System",
            tags: ["item", "not-implemented"],
        };
    }

    public async createItem(id: UUID): Promise<Item> {
        const info = await this.getItemInfo(id);
        return new Item(info);
    }

    // // Common method to gather basic information
    // private async getBasicInfo(id: UUID): Promise<Omit<ItemInit, "id">> {
    //     const currentTime = this.dataProvider.getCurrentTime();
    //     const userName = this.dataProvider.getUserName();

    //     return {
    //         name: await this.dataProvider.getName(id),
    //         description: await this.dataProvider.getDescription(id),
    //         creator: userName,
    //         created: currentTime,
    //         updated: currentTime,
    //         lastModifier: userName,
    //         tags: await this.dataProvider.getTags(id),
    //     };
    // }

    // // Factory methods for each type
    // async createItem(id: UUID): Promise<Item> {
    //     const basicInfo = await this.getBasicInfo(id);
    //     return new Item({ id, ...basicInfo });
    // }

    // async createRecord(id: UUID): Promise<Record> {
    //     if (!this.dataProvider.getCategory) {
    //         throw new Error(
    //             "DataProvider must implement getCategory for Records",
    //         );
    //     }

    //     const basicInfo = await this.getBasicInfo(id);
    //     const category = await this.dataProvider.getCategory(id);
    //     return new Record({ id, ...basicInfo, category });
    // }

    // async createRepository(id: UUID): Promise<Repository> {
    //     const basicInfo = await this.getBasicInfo(id);
    //     return new Repository({ id, ...basicInfo });
    // }

    // async createArchive(id: UUID): Promise<Archive> {
    //     const basicInfo = await this.getBasicInfo(id);
    //     return new Archive({ id, ...basicInfo });
    // }
}
