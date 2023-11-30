import mongoose from 'mongoose';

const infoSchema = new mongoose.Schema({
    religion: {
        type: String,
        default: '',
    },
    birthplace: {
        type: String,
        default: '',
    },
    employee_id: {
        type: String,
        required: true,
		unique: true,
    },
    status: {
        type: String,
        default: '',
    },
    address: {
        type: String,
        required: [true, 'Please provide address'],
    },
    gender: {
        type: String,
        default: '',
    },
    phone: {
		type: Number,
		required: [true, 'Please provide phone'],
	},
    birthplace: {
        type: Number,
        default: '',
    },
    father: {
        type: String,
        default: '',
    },
    mother: {
        type: String,
        default: '',
    },
    siblings: {
        type: Number,
        default: '',
    },
    father_attainment: {
        type: String,
        default: '',
    },
    mother_attainment: {
        type: String,
        default: '',
    },
    father_occupation: {
        type: String,
        default: '',
    },
    mother_occupation: {
        type: String,
        default: '',
    }
});


const employeeinformation = mongoose.models.basicinfo || mongoose.model('basicinfo', infoSchema);

export default employeeinformation;
