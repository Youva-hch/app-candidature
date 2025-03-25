import mongoose from "mongoose";

const candidatureSchema = mongoose.Schema(
    {
        entreprise: {
            type: String,
            minLenght: 3,
            required: true
        },
        status: {
            type: String,
            enum: ["en attente✋", "accepter✅", "refuser❌"],
            default: "en attente✋",
        },

    } , {
        timestamps: true
    }
)

export default mongoose.model("Candidature", candidatureSchema);
