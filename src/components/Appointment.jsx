//This is the Appointment Component

//Imports
import { useContext } from 'react'
import { AppContext } from '../store/Data'
import { Typography, makeStyles, TextField, Button } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import axios from 'axios'
import { useState } from 'react';

//Create custom material ui styles
const useStyles = makeStyles({
    form__title__root: {
        color: "#707070"
    },
    form__textFields__root: {
        marginTop: "3vh",
        width: "200px"
    },
    form__textFields__input: {
        color: "#FFFFFF",
        fontSize: "14px",
    },
    form__textFields__label: {
        color: "#CECECE",
        fontSize: "12px",
    },
    form__textFields__notchedOutline: {
        borderColor: "#CECECE"
    },
    form__textFields__input__root: {
        "&:hover $form__textFields__notchedOutline": {
            borderColor: "#FFFFFF"
        }
    },
    form__button__root: {
        color: "#152146",
        marginBottom: "20px",
        marginTop: "3vh",
        textTransform: "none",
        fontWeight: 700,
        fontSize: "12px",
        backgroundColor: "#BBD5EA"
    }
})

const phoneRegExp = /\b\d{10}\b/;
const ageRegExp = /\b[0-9]{1}[0-9]{0,2}\b/

//Create a validation schema with yup
const validationSchema = yup.object().shape({
    name: yup.string().required('Please enter your full name'),
    phone: yup.string().required("Please enter your phone number").matches(phoneRegExp, "Please enter a valid 10-digit phone number"),
    age: yup.string().required("Please enter your age").matches(ageRegExp, "Please enter a valid age"),
    address: yup.string().required('Please enter your full address'),
    sex: yup.string().required('Type either Male, Female or Prefer not to Say'),
    date: yup.string().required('Enter of the form dd/mm/yy'),
    time: yup.string().required('Enter of the form hh:mm am/pm')
})

//Appointment Function
const Appointment = () => {
    const classes = useStyles();
    const { control, handleSubmit, reset } = useForm({
        resolver: yupResolver(validationSchema)
    })

    //Get controls
    const [{ HOCLoaderVisibilityControls }, { AppointmentVisibilityControls }, { InfoDisplayControls }] = useContext(AppContext)
    const onFormSubmit = async data => {
        try {
            HOCLoaderVisibilityControls[1](() => true)
            AppointmentVisibilityControls[1](() => false)
            const serverResponse = await axios({
                method: "post",
                withCredentials: false,
                url: "https://erida.herokuapp.com/v1/appointment-service/comms",
                data,
            })
            HOCLoaderVisibilityControls[1](() => false)
            InfoDisplayControls[1](() => {
                return {
                    visible: true,
                    message: "Appointment Booking Successful",
                }
            })
            setTimeout(() => {
                InfoDisplayControls[1](previous => {
                    return {
                        ...previous,
                        visible: false,
                    }
                })
            }, 3000)
        }
        catch (error) {
            HOCLoaderVisibilityControls[1](() => false)
            AppointmentVisibilityControls[1](() => false)
            InfoDisplayControls[1](() => {
                return {
                    visible: true,
                    message: "Appointment Booking Successful",
                }
            })
            setTimeout(() => {
                InfoDisplayControls[1](previous => {
                    return {
                        ...previous,
                        visible: false,
                    }
                })
            }, 3000)
        }
    }

    return (
        <div className="appointment">
            <div className="appointment__form">
                <form
                    onSubmit={handleSubmit(onFormSubmit)}
                >
                    <div className="details">
                        <div className="details__personal-details">
                            <Controller
                                name="name"
                                defaultValue=""
                                control={control}
                                render={({ field: { onChange, value }, fieldState: { error } }) => (
                                    <TextField
                                        size='small'
                                        variant="outlined"
                                        type="text"
                                        label="Full Name"
                                        color="primary"
                                        value={value}
                                        onChange={onChange}
                                        error={Boolean(error)}
                                        autoFocus
                                        helperText={error ? error.message : ""}
                                        InputLabelProps={{
                                            classes: {
                                                root: classes.form__textFields__label
                                            }
                                        }}
                                        classes={{
                                            root: classes.form__textFields__root,
                                        }}
                                        InputProps={{
                                            classes: {
                                                root: classes.form__textFields__input__root,
                                                input: classes.form__textFields__input,
                                                notchedOutline: classes.form__textFields__notchedOutline
                                            }
                                        }}
                                    />
                                )}
                            />
                            <Controller
                                name="age"
                                defaultValue=""
                                control={control}
                                render={({ field: { onChange, value }, fieldState: { error } }) => (
                                    <TextField
                                        size='small'

                                        variant="outlined"
                                        type="text"
                                        label="Age"
                                        color="primary"
                                        value={value}
                                        onChange={onChange}
                                        error={Boolean(error)}
                                        helperText={error ? error.message : ""}
                                        InputLabelProps={{
                                            classes: {
                                                root: classes.form__textFields__label
                                            }
                                        }}
                                        classes={{
                                            root: classes.form__textFields__root,
                                        }}
                                        InputProps={{
                                            classes: {
                                                root: classes.form__textFields__input__root,
                                                input: classes.form__textFields__input,
                                                notchedOutline: classes.form__textFields__notchedOutline
                                            }
                                        }}
                                    />
                                )}
                            />
                            <Controller
                                name="sex"
                                defaultValue=""
                                control={control}
                                render={({ field: { onChange, value }, fieldState: { error } }) => (
                                    <TextField
                                        size='small'

                                        variant="outlined"
                                        type="text"
                                        label="Gender (Male/Female)"
                                        color="primary"
                                        value={value}
                                        onChange={onChange}
                                        error={Boolean(error)}
                                        helperText={error ? error.message : ""}
                                        InputLabelProps={{
                                            classes: {
                                                root: classes.form__textFields__label
                                            }
                                        }}
                                        classes={{
                                            root: classes.form__textFields__root,
                                        }}
                                        InputProps={{
                                            classes: {
                                                root: classes.form__textFields__input__root,
                                                input: classes.form__textFields__input,
                                                notchedOutline: classes.form__textFields__notchedOutline
                                            }
                                        }}
                                    />
                                )}
                            />
                            <Controller
                                name="phone"
                                defaultValue=""
                                control={control}
                                render={({ field: { onChange, value }, fieldState: { error } }) => (
                                    <TextField
                                        size='small'

                                        variant="outlined"
                                        type="tel"
                                        label="Phone number"
                                        color="primary"
                                        value={value}
                                        onChange={onChange}
                                        error={Boolean(error)}
                                        helperText={error ? error.message : ""}
                                        InputLabelProps={{
                                            classes: {
                                                root: classes.form__textFields__label
                                            }
                                        }}
                                        classes={{
                                            root: classes.form__textFields__root,
                                        }}
                                        InputProps={{
                                            classes: {
                                                root: classes.form__textFields__input__root,
                                                input: classes.form__textFields__input,
                                                notchedOutline: classes.form__textFields__notchedOutline
                                            }
                                        }}
                                    />
                                )}
                            />
                        </div>
                        <div className="details__appointment-details">
                            <Controller
                                name="address"
                                defaultValue=""
                                control={control}
                                render={({ field: { onChange, value }, fieldState: { error } }) => (
                                    <TextField
                                        size='small'

                                        variant="outlined"
                                        type="text"
                                        label="Full Address"
                                        color="primary"
                                        value={value}
                                        onChange={onChange}
                                        error={Boolean(error)}
                                        helperText={error ? error.message : ""}
                                        InputLabelProps={{
                                            classes: {
                                                root: classes.form__textFields__label
                                            }
                                        }}
                                        classes={{
                                            root: classes.form__textFields__root,
                                        }}
                                        InputProps={{
                                            classes: {
                                                root: classes.form__textFields__input__root,
                                                input: classes.form__textFields__input,
                                                notchedOutline: classes.form__textFields__notchedOutline
                                            }
                                        }}
                                    />
                                )}
                            />
                            <Controller
                                name="date"
                                defaultValue=""
                                control={control}
                                render={({ field: { onChange, value }, fieldState: { error } }) => (
                                    <TextField
                                        size='small'

                                        variant="outlined"
                                        type="text"
                                        label="Date (dd/mm/yy)"
                                        color="primary"
                                        value={value}
                                        onChange={onChange}
                                        error={Boolean(error)}
                                        helperText={error ? error.message : ""}
                                        InputLabelProps={{
                                            classes: {
                                                root: classes.form__textFields__label
                                            }
                                        }}
                                        classes={{
                                            root: classes.form__textFields__root,
                                        }}
                                        InputProps={{
                                            classes: {
                                                root: classes.form__textFields__input__root,
                                                input: classes.form__textFields__input,
                                                notchedOutline: classes.form__textFields__notchedOutline
                                            }
                                        }}
                                    />
                                )}
                            />
                            <Controller
                                name="time"
                                defaultValue=""
                                control={control}
                                render={({ field: { onChange, value }, fieldState: { error } }) => (
                                    <TextField
                                        size='small'

                                        variant="outlined"
                                        type="text"
                                        label="Time (hh/mm am/pm)"
                                        color="primary"
                                        value={value}
                                        onChange={onChange}
                                        error={Boolean(error)}
                                        helperText={error ? error.message : ""}
                                        InputLabelProps={{
                                            classes: {
                                                root: classes.form__textFields__label
                                            }
                                        }}
                                        classes={{
                                            root: classes.form__textFields__root,
                                        }}
                                        InputProps={{
                                            classes: {
                                                root: classes.form__textFields__input__root,
                                                input: classes.form__textFields__input,
                                                notchedOutline: classes.form__textFields__notchedOutline
                                            }
                                        }}
                                    />
                                )}
                            />
                        </div>
                    </div>
                    <div className="button">
                        <Button
                            type="submit"
                            variant="contained"
                            children="Book Now"
                            size="medium"
                            classes={{
                                root: classes.form__button__root,
                            }}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

//Default export Appointment
export default Appointment