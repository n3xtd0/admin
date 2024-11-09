import { DataProvider, GetListParams } from "ra-core";
import { TournamentType, TournamentEvent, Player, TournamentEventResult } from "./types";
import { CreateParams, DeleteManyParams, DeleteParams, RaRecord, UpdateManyParams, UpdateParams } from "react-admin";

type Data = {
  tournamentTypes: TournamentType[];
  tournamentEvents: TournamentEvent[];
  players: Player[];
  tournamentEventResults: TournamentEventResult[];
};

const mockData: Data = {
  tournamentTypes: [
    { id: 1, name: "Texas Hold'em" },
    { id: 2, name: "Omaha" },
    { id: 3, name: "Seven Card Stud" },
  ],
  tournamentEvents: [
    { id: 1, name: "Summer Poker Classic", tournamentTypeId: 1, startDate: "2023-07-15", endDate: "2023-07-20" },
    { id: 2, name: "Winter Omaha Challenge", tournamentTypeId: 2, startDate: "2023-12-01", endDate: "2023-12-05" },
  ],
  players: [
    { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com" },
    { id: 2, firstName: "Jane", lastName: "Smith", email: "jane@example.com" },
    { id: 3, firstName: "Bob", lastName: "Johnson", email: "bob@example.com" },
  ],
  tournamentEventResults: [
    { id: 1, tournamentEventId: 1, playerId: 1, registrationDate: "2023-07-01", status: "registered" },
    { id: 2, tournamentEventId: 1, playerId: 2, registrationDate: "2023-07-02", status: "confirmed" },
    { id: 3, tournamentEventId: 2, playerId: 2, registrationDate: "2023-11-20", status: "registered" },
    { id: 4, tournamentEventId: 2, playerId: 3, registrationDate: "2023-11-21", status: "cancelled" },
  ],
};

export const mockDataProvider: DataProvider = {
  getList: <RecordType extends RaRecord>(resource: string, params: GetListParams) => {
    const { page, perPage } = params.pagination;
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const data = mockData[resource as keyof Data]?.slice(start, end) as unknown as RecordType[];
    return Promise.resolve({
      data,
      total: mockData[resource as keyof Data]?.length ?? 0,
    });
  },
  getOne: <RecordType extends RaRecord>(resource: string, { id }: { id: RecordType["id"] }) => {
    const data = mockData[resource as keyof Data].find((item) => +item.id === +id) as unknown as RecordType;
    return Promise.resolve({ data });
  },
  getMany: <RecordType extends RaRecord>(resource: string, { ids }: { ids: RecordType["id"][] }) => {
    const data = mockData[resource as keyof Data].filter((item) => ids.includes(item.id)) as unknown as RecordType[];
    return Promise.resolve({ data });
  },
  getManyReference: <RecordType extends RaRecord>(resource: string, params: { target: string; id: RecordType["id"] }) => {
    const { target, id } = params;
    const data = mockData[resource as keyof Data].filter((item) => (item as any)[target] === id) as unknown as RecordType[];
    return Promise.resolve({
      data,
      total: data.length,
    });
  },
  create: <RecordType extends RaRecord>(resource: string, params: CreateParams<RecordType>) => {
    const newId = Math.max(...mockData[resource as keyof Data].map((item) => item.id)) + 1;
    const newItem = { ...params.data, id: newId } as unknown as RecordType;
    mockData[resource as keyof Data].push(newItem as any);
    return Promise.resolve({ data: newItem });
  },
  update: <RecordType extends RaRecord>(resource: string, params: UpdateParams<RecordType>) => {
    const index = mockData[resource as keyof Data].findIndex((item) => item.id === params.id);
    mockData[resource as keyof Data][index] = { ...mockData[resource as keyof Data][index], ...params.data };
    return Promise.resolve({ data: mockData[resource as keyof Data][index] as unknown as RecordType });
  },
  updateMany: <RecordType extends RaRecord>(resource: string, params: UpdateManyParams<RecordType>) => {
    const updatedIds = params.ids;
    mockData[resource as keyof Data] = mockData[resource as keyof Data].map((item) => 
      updatedIds.includes(item.id) ? { ...item, ...params.data } : item
    ) as any;
    return Promise.resolve({ data: updatedIds });
  },
  delete: <RecordType extends RaRecord>(resource: string, params: DeleteParams) => {
    const index = mockData[resource as keyof Data].findIndex((item) => item.id === params.id);
    const deletedItem = mockData[resource as keyof Data][index] as unknown as RecordType;
    mockData[resource as keyof Data].splice(index, 1);
    return Promise.resolve({ data: deletedItem });
  },
  deleteMany: (resource: string, params: DeleteManyParams) => {
    const deletedIds = params.ids;
    mockData[resource as keyof Data] = mockData[resource as keyof Data].filter((item) => !deletedIds.includes(item.id)) as any;
    return Promise.resolve({ data: deletedIds });
  },
};
