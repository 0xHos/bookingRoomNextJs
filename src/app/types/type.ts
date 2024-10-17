export interface IRoom {
  user_id: string;
  title: string;
  description: string;
  address: string;
  location?: string;
  availability: string;
  sqft?: string;
  capacity?: string;
  price: string;
  amenities?: null;
  img?: any;
  bed?: string;
  bathroom?: string;

  $id?: string;
}

export interface IBooking {
  user_id: string;
  room_id: string;
  ckeckin: string;
  ckeckout: string;
}
