import mongoose from "mongoose";

const connectDb = async () => {
    const url = "mongodb+srv://mohitsinghbuilds_db_user:mohitsingh11223344@cluster0.vzqcnkn.mongodb.net/Quicky"
    try {
        await mongoose.connect(url)
        console.log("DB Connected")
    } catch (error) {
        console.log("DB Error")
    }
}
export default connectDb
