import mongoose from 'mongoose';

const requestfiles = new mongoose.Schema({
    request_id: {
      type: String,
      unique: true,
    },
    employee_id: {
      type: String,
    },
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
    },
    position:{
        type: Date,
    },
    fileInfo: {
        filename: {
          type: String,
          default: '',
        },
        contentType: {
          type: String,
          default: '',
        },
        data: {
          type: Buffer,
          default: Buffer.from(''),
        },
      },    
    description: {
        type: String,
        default: '',
    },
    note: {
        type: String,
        default: '',
    },
    
});


const requestfile = mongoose.models.requestfiles || mongoose.model('201files', requestfiles);

export default requestfile;
