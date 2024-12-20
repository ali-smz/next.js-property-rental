import { model, models, Schema } from "mongoose";

const PropertySchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    description: {
      type: String,
    },
    location: {
      street: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      zipcode: {
        type: String,
      },
    },
    beds: {
      type: Number,
      require: true,
    },
    baths: {
      type: Number,
      require: true,
    },
    square_feet: {
      type: Number,
      require: true,
    },
    amenities: [
      {
        type: String,
      },
    ],
    rates: {
      nightly: {
        type: Number,
      },
      weekly: {
        type: Number,
      },
      monthly: {
        type: Number,
      },
    },
    seller_info: {
      name: {
        type: String,
      },
      email: {
        type: String,
      },
      phone: {
        type: String,
      },
    },
    images: [
      {
        type: String,
      },
    ],
    is_featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Property = models.Property || model("Property", PropertySchema);

export default Property;
