import { DataProvider } from "ra-core";
import { TournamentType, TournamentEvent, Player, TournamentEventResult } from "./types";

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
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const data = mockData[resource].slice(start, end);
    return Promise.resolve({
      data,
      total: mockData[resource].length,
    });
  },
  getOne: (resource, { id }) => {
    const data = mockData[resource].find((item) => +item.id === +id);
    return Promise.resolve({ data });
  },
  getMany: (resource, { ids }) => {
    const data = mockData[resource].filter((item) => ids.includes(item.id));
    return Promise.resolve({ data });
  },
  getManyReference: (resource, params) => {
    const { target, id } = params;
    const data = mockData[resource].filter((item) => item[target] === id);
    return Promise.resolve({
      data,
      total: data.length,
    });
  },
  create: (resource, params): Promise<{ data: any }> => {
    const newId = Math.max(...mockData[resource].map((item) => item.id)) + 1;
    const newItem = { ...params.data, id: newId };
    mockData[resource].push(newItem);
    return Promise.resolve({ data: newItem });
  },
  update: (resource, params) => {
    const index = mockData[resource].findIndex((item) => item.id === params.id);
    mockData[resource][index] = { ...mockData[resource][index], ...params.data };
    return Promise.resolve({ data: mockData[resource][index] });
  },
  updateMany: (resource, params) => {
    const updatedIds = params.ids;
    mockData[resource] = mockData[resource].map((item) => (updatedIds.includes(item.id) ? { ...item, ...params.data } : item));
    return Promise.resolve({ data: updatedIds });
  },
  delete: (resource, params) => {
    const index = mockData[resource].findIndex((item) => item.id === params.id);
    const deletedItem = mockData[resource][index];
    mockData[resource].splice(index, 1);
    return Promise.resolve({ data: deletedItem });
  },
  deleteMany: (resource, params) => {
    const deletedIds = params.ids;
    mockData[resource] = mockData[resource].filter((item) => !deletedIds.includes(item.id));
    return Promise.resolve({ data: deletedIds });
  },
};
