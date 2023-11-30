import mongoose from 'mongoose';

const zzz = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    employee_id: {
        type: String,
        default: '',
    },
    requested_file: {
        type: String,
        default: '',
    },
    description: {
        type: String,
        default: '',
    },
    note: {
        type: String,
        default: '',
    },
    date: {
        type: Date,
        
    }
});


const bundy = mongoose.models.zzz || mongoose.model('times', zzz);

export default bundy;
