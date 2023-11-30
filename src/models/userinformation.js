import mongoose from 'mongoose';

const information = new mongoose.Schema({
    EmployeeInformation: {
        name: {
            type: String,
            required: true,
        },
        employee_id: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            default: '',
            required: false,
        },
        role: {
            type: String,
            required: true,
        }
    },
    PayInformation: {
        days: {
            type: Number,
            required: true,
        },
        rate: {
            type: Number,
            required: true,
        },
    },
    datecreated: {
        type: Date,
    }
});

const userinformation = mongoose.models.information || mongoose.model('information', information);

export default userinformation;
