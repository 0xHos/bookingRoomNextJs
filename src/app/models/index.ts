import { connect } from "../utils/db/connect";
import { IArtical, articalModel } from "./artical";

connect();
export const createArtical = (arti: IArtical) => {
  const artical = new articalModel({ ...arti });
  artical.save();
};

export const getAllArticals = async () => {
  const articals = await articalModel.find({});
  return articals;
};

export const getArticalById = async (id: string) => {
  const artical = await articalModel.findById(id);
  return artical;
};

export const getLastArticals = async () => {
  const articals = await articalModel.find({}).sort({ _id: -1 }).limit(5);
  return articals;
};
