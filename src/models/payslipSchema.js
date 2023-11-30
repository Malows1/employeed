import mongoose from 'mongoose';

const payslip = new mongoose.Schema({
    employeeinformation: {
        name: {
            type: String,
            required: true,
        },
        employee_id: {
            type: String,
            default: '',
            required: true,
        },
        role: {
            type: String,
            default: '',
            required: true,
        },
    },
    taxableincome: {
        days: {
            type: String,
            default: '',
            required: true,
        },
        salary: {
            type: String,
            default: '',
            required: true,
        },
        overtime: {
            type: String,
            default: '',
        },
        grossearnings: {
            type: String,
            required: true,
        },
    },
    deduction: {
        tax: {
            type: String,
            required: false,
        },
        pagibig: {
            type: String,
            required: true,
        },
        philhealth: {
            type: String,
            required: true,
        },
        sss: {
            type: String,
            required: true,
        },
        totalcontribution: {
            type: String,
            required: true,
        },
    },
    periodcovered: {
        type: String,
        required: true,
    },
    netpay: {
        type: String,
        default: "",
    },
    date: {
        type: String,
        required: false,
    }
});

const employeePayslip = mongoose.models.payslip || mongoose.model('payslip', payslip);

export default employeePayslip;
