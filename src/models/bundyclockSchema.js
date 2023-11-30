import mongoose from 'mongoose';

const times = new mongoose.Schema({
    employee_id: {
        type: String,
        required: true,
    },
    time_in: {
        type: String,
        default: '',
    },
    time_out: {
        type: String,
        default: '',
    },
    date: {
        type: Date,
    },
});


const bundy = mongoose.models.times || mongoose.model('times', times);

export default bundy;
