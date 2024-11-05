export interface TournamentType {
  id: number;
  name: string;
  description?: string;
}

export interface TournamentEvent {
  id: number;
  name: string;
  tournamentTypeId: TournamentType["id"];
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

export interface TournamentEventResult {
  id: number;
  tournamentEventId: TournamentEvent["id"];
  playerId: Player["id"];
  registrationDate: string;
  status: "registered" | "confirmed" | "cancelled";
}
