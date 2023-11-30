import mongoose from 'mongoose';

const infoSchema = new mongoose.Schema({
    employee_id: {
        type: String,
        required: true,
        unique: true,
    },
    basic:{
        religion: {
            type: String,
            default: '',
        },
        birthplace: {
            type: String,
            default: '',
        },
        status: {
            type: String,
            default: '',
        },
        gender: {
            type: String,
            default: '',
        },
        phone: {
            type: Number,
            default: '',
        },
    },
    
    address: {
        blk:{
            type: String,
            default: '',
        },
        street: {
            type: String, 
            default: '',
        },
        barangay: {
            type: String, 
            default: '',
        },
        city: {
            type: String, 
            default: '',
        },
        region: {
            type: String, 
            default: '',
        },
        zipcode: {
            type: String, 
            default: '',
        },
    },
    familybg:{
        father_name: {
            type: String,
            default: '',
        },
        mother_name: {
            type: String,
            default: '',
        },
        sibling: {
            type: String,
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
        },
    },
    educationalbg:{
        tertiary: {
            type: String,
            default: '',
        },
        secondary: {
            type: String,
            default: '',
        },
        primary: {
            type: String,
            default: '',
        },
    },
    medical: {
        height: {
            type: String,
            default: '',
        },
        weight: {
            type: String,
            default: '',
        },
        bloodtype: {
            type: String,
            default: '',
        },
        medicalhistory: {
            type: String,
            default: '',
        },
    },
    skillandhobby:{
        skill:{
            type: String,
            default: '',
        },
        hobby: {
            type: String,
            default: '',
        },
    },
    
});


const employeeinformation = mongoose.models.basicinfo || mongoose.model('basicinfo', infoSchema);

export default employeeinformation;
