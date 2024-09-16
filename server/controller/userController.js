// This file is used to create APIs for user

const express = require('express')
const User = require('../model/userModel') //import userModel.js

exports.create = async (req, res) => {
  try {
    const userData = new User(req.body)
    if (!userData) return res.status(404).json({ msg: 'User data not found' })
    await userData.save()
    res.status(201).json({ msg: 'User created succesfully', userData })
  } catch (err) {
    res.status(500).json({ error: err.msg || 'Internal server error' })
  }
}

exports.getAll = async (req, res) => {
  try {
    const userData = await User.find()
    if (!userData) return res.status(404).json({ msg: 'User data not found' })
    res.status(200).json(userData)
  } catch (err) {
    res.status(500).json({ error: err.msg })
  }
}

exports.getOne = async (req, res) => {
  try {
    const userData = await User.findById(req.params.id)
    if (!userData) return res.status(404).json({ msg: 'User data not found' })
    res.status(200).json(userData)
  } catch (err) {
    res.status(500).json({ error: err.msg })
  }
}

exports.update = async (req, res) => {
  try {
    const { fname, lname, email, password } = req.body
    const userData = await User.findByIdAndUpdate(
      req.params.id,
      {
        fname,
        lname,
        email,
        password,
      },
      { new: true },
    )
    if (!userData) return res.status(404).json({ msg: 'User data not found' })

    res.status(200).json({ msg: 'User updated successfully' })
  } catch (err) {
    res.status(500).json({ error: err.msg })
  }
}

exports.delete = async (req, res) => {
  try {
    const userDelete = await User.findById(req.params.id)
    if (!userDelete) return res.status(404).json({ msg: 'User data not found' })
    await userDelete.deleteOne()
    res.status(200).json({ msg: 'This user has been deleted' })
  } catch (err) {
    res.status(500).json({ error: err.msg })
  }
}
