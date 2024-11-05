import { DataProvider } from 'ra-core';

const mockData = {
  tournamentTypes: [
    { id: 1, name: 'Texas Hold\'em' },
    { id: 2, name: 'Omaha' },
    { id: 3, name: 'Seven Card Stud' },
  ],
  tournamentEvents: [
    { id: 1, name: 'Summer Poker Classic', tournamentTypeId: 1, startDate: '2023-07-15' },
    { id: 2, name: 'Winter Omaha Challenge', tournamentTypeId: 2, startDate: '2023-12-01' },
  ],
  players: [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
  ],
  tournamentEventPlayers: [
    { id: 1, tournamentEventId: 1, playerId: 1 },
    { id: 2, tournamentEventId: 1, playerId: 2 },
    { id: 3, tournamentEventId: 2, playerId: 2 },
    { id: 4, tournamentEventId: 2, playerId: 3 },
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
  getOne: (resource, params) => {
    const data = mockData[resource].find(item => item.id === params.id);
    return Promise.resolve({ data });
  },
  getMany: (resource, params) => {
    const data = mockData[resource].filter(item => params.ids.includes(item.id));
    return Promise.resolve({ data });
  },
  getManyReference: (resource, params) => {
    const { target, id } = params;
    const data = mockData[resource].filter(item => item[target] === id);
    return Promise.resolve({
      data,
      total: data.length,
    });
  },
  create: (resource, params): Promise<{ data: any }> => {
    const newId = Math.max(...mockData[resource].map(item => item.id)) + 1;
    const newItem = { ...params.data, id: newId };
    mockData[resource].push(newItem);
    return Promise.resolve({ data: newItem });
  },
  update: (resource, params) => {
    const index = mockData[resource].findIndex(item => item.id === params.id);
    mockData[resource][index] = { ...mockData[resource][index], ...params.data };
    return Promise.resolve({ data: mockData[resource][index] });
  },
  updateMany: (resource, params) => {
    const updatedIds = params.ids;
    mockData[resource] = mockData[resource].map(item =>
      updatedIds.includes(item.id) ? { ...item, ...params.data } : item
    );
    return Promise.resolve({ data: updatedIds });
  },
  delete: (resource, params) => {
    const index = mockData[resource].findIndex(item => item.id === params.id);
    const deletedItem = mockData[resource][index];
    mockData[resource].splice(index, 1);
    return Promise.resolve({ data: deletedItem });
  },
  deleteMany: (resource, params) => {
    const deletedIds = params.ids;
    mockData[resource] = mockData[resource].filter(item => !deletedIds.includes(item.id));
    return Promise.resolve({ data: deletedIds });
  },
};