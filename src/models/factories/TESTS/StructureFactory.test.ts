import { StructureFactory } from "../StructureFactory";
import { Archive, Item, Record, Repository } from "../DataStructures";
import { UUID } from "@/types";

describe("StructureFactory", () => {
    let factory: StructureFactory;
    const mockUUID: UUID = "123e4567-e89b-4d3c-8456-426614174000";

    beforeEach(() => {
        factory = StructureFactory.getInstance();
    });

    describe("Singleton Pattern", () => {
        it("should return the same instance", () => {
            const instance1 = StructureFactory.getInstance();
            const instance2 = StructureFactory.getInstance();
            expect(instance1).toBe(instance2);
        });
    });

    describe("Archive Creation", () => {
        it("should create Archive instance", async () => {
            const archive = await factory.createArchive(mockUUID);
            expect(archive).toBeInstanceOf(Archive);
        });

        it("should pass correct data to Archive", async () => {
            const archive = await factory.createArchive(mockUUID);
            expect(archive).toMatchObject({
                id: mockUUID,
                name: "Archive",
                tags: expect.arrayContaining(["archive"]),
            });
        });
    });

    describe("Repository Creation", () => {
        it("should create Repository instance", async () => {
            const repo = await factory.createRepository(mockUUID);
            expect(repo).toBeInstanceOf(Repository);
        });

        it("should pass correct data to Repository", async () => {
            const repo = await factory.createRepository(mockUUID);
            expect(repo).toMatchObject({
                id: mockUUID,
                name: "Repository",
                tags: expect.arrayContaining(["repository"]),
            });
        });
    });

    describe("Record Creation", () => {
        it("should create Record instance", async () => {
            const record = await factory.createRecord(mockUUID);
            expect(record).toBeInstanceOf(Record);
        });

        it("should pass correct data to Record", async () => {
            const record = await factory.createRecord(mockUUID);
            expect(record).toMatchObject({
                id: mockUUID,
                name: "Record",
                category: "Uncategorized",
                tags: expect.arrayContaining(["record"]),
            });
        });
    });

    describe("Item Creation", () => {
        it("should create Item instance", async () => {
            const item = await factory.createItem(mockUUID);
            expect(item).toBeInstanceOf(Item);
        });

        it("should pass correct data to Item", async () => {
            const item = await factory.createItem(mockUUID);
            expect(item).toMatchObject({
                id: mockUUID,
                name: "Item",
                tags: expect.arrayContaining(["item"]),
            });
        });
    });

    describe("Common Properties", () => {
        const testEntities = [
            { method: "createArchive", name: "Archive" },
            { method: "createRepository", name: "Repository" },
            { method: "createRecord", name: "Record" },
            { method: "createItem", name: "Item" },
        ] as const;

        for (const { method, name } of testEntities) {
            describe(`${name} Properties`, () => {
                it("should have correct common properties", async () => {
                    const entity = await factory[method](mockUUID);
                    expect(entity.creator).toBe("System");
                    expect(entity.lastModifier).toBe("System");
                    expect(entity.created).toBeInstanceOf(Date);
                    expect(entity.updated).toBeInstanceOf(Date);
                    expect(entity.description).toContain("not implemented");
                });
            });
        }
    });
});
