const Routines = {
    RR: {
        name: 'Recommended Routine',
        warmups: {
            name: 'Warmups',
            dynamicStretches: {
                name: 'Dynamic Stretches',
                exercises: {
                    dislocates: {
                        name: 'Stick/Band Dislocates',
                        reps: '5-10',
                        hasProgression: false,
                        progression: []
                    },
                    skyReaches: {
                        name: 'Squat Sky Reaches',
                        reps: '5-10',
                        hasProgression: false,
                        progression: []
                    },
                    wristPrep: {
                        name: 'GMB Wrist Prep',
                        reps: '10+',
                        hasProgression: true,
                        progression: [
                            'Finger Pulses',
                            'Palm Pulses',
                            'Front Facing Elbow Rotation',
                            'Rear Facing Wrist Stretch',
                            'Palms Down',
                            'Palms Up',
                            'Elbow Rotation',
                            'Front Facing Wrist Stretch',
                        ]
                    },
                    archHangs: {
                        name: 'Arch Hangs',
                        reps: '5-10',
                        hasProgression: false,
                        progression: []
                    },
                    supportHold: {
                        name: 'Support Hold',
                        reps: '30s',
                        hasProgression: false,
                        progression: []
                    },
                }
            },
            bodylineDrills: {
                name: 'Bodyline Drills',
                exercises: {
                    plank: {
                        name: 'Plank',
                        reps: '10-60s',
                        hasProgression: false,
                        progression: []
                    },
                    sidePlank: {
                        name: 'Side Plank',
                        reps: '10-60s',
                        hasProgression: false,
                        progression: []
                    },
                    reversePlank: {
                        name: 'Reverse Plank',
                        reps: '10-60s',
                        hasProgression: false,
                        progression: []
                    },
                    hollowHold: {
                        name: 'Hollow Hold',
                        reps: '10-60s',
                        hasProgression: false,
                        progression: []
                    },
                    archHold: {
                        name: 'Arch Hold',
                        reps: '10-60s',
                        hasProgression: false,
                        progression: []
                    }
                }
            }
        },
        stillWork: {
            name: 'Still Work',
            exercises: {
                handstandProg: {
                    name: 'Handstand Progression',
                    reps: '5-10mins',
                    hasProgression: true,
                    progression: [
                        'Wall Plank',
                        'Wall Handstand',
                        'Freestanding Handstand'
                    ]
                },
                skinTheCatProg: {
                    name: 'Skin the Cat Progression',
                    reps: '2-3mins',
                    hasProgression: true,
                    progression: [
                        'Dead Hang',
                        'Inverted Hang',
                        'Skin the Cat'
                    ]
                }
            }
    
        },
        strengthWork: {
            name: 'Strength Work',
            exercises: {
                firstPair: {
                    name: 'First Pair',
                    exercises: {
                        pullupProg: {
                            name: 'Pull-Up Progression',
                            reps: '3 x 5-8',
                            hasProgression: true,
                            progression: [
                                'Scapular Pulls',
                                'Arch Hangs',
                                'Pull-up Negatives',
                                'Pull-ups',
                                'L-sit Pull-ups',
                                'Weighted Pull-ups'
                            ]
                        },
                        dipProg: {
                            name: 'Dip Progression',
                            reps: '3 x 5-8',
                            hasProgression: true,
                            progression: [
                                'Parallel Bar Support Hold',
                                'Dip Negatives',
                                'Parallel Bar Dips',
                                'Rings L-sit Dips',
                                'Weighted Dips'
                            ]
                        },
                    }
                },
                secondPair: {
                    name: 'Second Pair',
                    exercises: {
                        lsitProg: {
                            name: 'L-sit Progression',
                            reps: '3 x 10-30s',
                            hasProgression: true,
                            progression: [
                                'Foot Supported L-sit',
                                'One-Leg Foot Supported L-sit',
                                'Tuck L-sit',
                                'Advanced Tuck/One-Leg Tuck L-sit',
                                'L-sit'
                            ]
                        },
                        squatProg: {
                            name: 'Squat Progression',
                            reps: '3 x 5-8',
                            hasProgression: true,
                            progression: [
                                'Assisted Squats',
                                'Squats',
                                'Step Ups',
                                'Deep Step Ups',
                                'Assisted Pistol Squats',
                                'Pistol Squats'
                            ]
                        },
                    }
                },
                thirdPair: {
                    name: 'Third Pair',
                    exercises: {
                        pushupProg: {
                            name: 'Push-Up Progression',
                            reps: '3 x 5-8',
                            hasProgression: true,
                            progression: [
                                'Vertical Push-ups',
                                'Incline Push-ups',
                                'Full Push-ups',
                                'Diamond Push-ups',
                                'Wide Ring Push-ups',
                                'Ring Push-ups',
                                'RTO Push-ups',
                                'RTO PPPU'
                            ]
                        },
                        rowProg: {
                            name: 'Row Progression',
                            reps: '3 x 5-8',
                            hasProgression: true,
                            progression: [
                                'Vertical Rows',
                                'Incline Rows',
                                'Horizontal Rows',
                                'Wide Rows'
                            ]
                        }
                    }
                }
            }
        }
    },
}

export default Routines