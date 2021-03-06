const mongoose = require('mongoose');

module.exports = {
  status: {
    type: String,
    enum: ['teacher', 'admin', 'student'],
  },
  firstName: String,
  lastName: String,
  email: String,
  passwordHash: String,
  passwordSalt: String,
  university: String,
  faculty: String,
  graduateYear: Number,
  course: String,
  groupNumber: Number,
  mediumTaskScore: {
    type: Number,
    default: 0,
  },
  tasks: [{
    taskId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task',
    },
    groupId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Group',
    },
    startDate: Date,
    finishDate: Date,
    isPassed: Boolean,
    bestResult: Number,
    attempts:
      [{
        date: Date,
        number: Number,
        mainFile: String,
        files: [String],
        result: Number,
        isPassed: Boolean,
        tests: [{
          _id: mongoose.Schema.Types.ObjectId,
          success: Boolean,
          weight: Number,
        }],
        comments: [{
          teacherId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
          },
          date: Date,
          text: String,
        }],
      }],
  }],
  mediumTestScore: {
    type: Number,
    default: 0,
  },
  tests: [{
    groupId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Group',
    },
    startDate: Date,
    finishDate: Date,
    topicsIds: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Topic',
    }],
    tags: [String],
    result: Number,
    status: {
      type: String,
      enum: ['notSent', 'inProgress', 'notPassed', 'passed'],
    },
    time: Number,
    questionAmount: Number,
    isTraining: Boolean,
    attemptTime: Number,
    date: Date,
    questions:
      [{
        questionId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Question',
        },
        selectedAnswers: [String],
        isPassed: Boolean,
      }],
  }],
};
