export interface TournamentType {
  id: number;
  name: string;
  description?: string;
}

export interface TournamentEvent {
  id: number;
  name: string;
  tournamentTypeId: number;
  startDate: string;
  endDate: string;
  location?: string;
}

export interface Player {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth?: string;
  phoneNumber?: string;
}

export interface TournamentEventPlayer {
  id: number;
  tournamentEventId: number;
  playerId: number;
  registrationDate: string;
  status: "registered" | "confirmed" | "cancelled";
}
