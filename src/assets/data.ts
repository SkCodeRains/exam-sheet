import { Advanced_Internet_Programming } from "./Advanced_Internet_Programming";
import { Introduction_to_Machine_Learning } from "./Introduction_to_Machine_Learning";
import { Parallel_And_Ditributed_Computing } from "./Parallel_And_Ditributed_Computing";
import { Python_Programming } from "./Python_Programming";
import { System_Programming_And_Operating_System } from "./System_Programming_And_Operating_System";

export interface PeriodicElement {
    Q: string;
    A: string;
}


export const applicationData = {
    MCA: [
        {
            SEMESTER_NAME: "2",
            SUBJECTS: [
                {
                    SUBJECT_NAME: "Advanced Internet Programming",
                    DATA: Advanced_Internet_Programming
                },
                {
                    SUBJECT_NAME: "System Programming & Operating System",
                    DATA: System_Programming_And_Operating_System
                },
                {
                    SUBJECT_NAME: "Parallel And Ditributed Computing",
                    DATA: Parallel_And_Ditributed_Computing
                },
                {
                    SUBJECT_NAME: "Introduction to Machine Learning",
                    DATA: Introduction_to_Machine_Learning
                },
                {
                    SUBJECT_NAME: "Python Programming",
                    DATA: Python_Programming
                },

            ],
        }
    ]
}