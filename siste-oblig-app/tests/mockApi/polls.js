const PollsMockApi = {
  pollsFound: {
    "status": 200,
    "polls": [
        {
            "answerOptions": [
                "Hvitost",
                "Gulost"
            ],
            "_id": "5fa3dc7fed2541f3fc39d942",
            "name": "Hva er riktig navn på ost?",
            "creator": "troarng@outlook.com",
            "question": "Heter det gulost eller hvitost?",
            "__v": 0
        },
        {
            "answerOptions": [
                "Høna",
                "Egget"
            ],
            "_id": "5fabf5e03eb22c90cc02c357",
            "name": "Høna og egget",
            "creator": "sturla.g@online.no",
            "question": "Hva kom først av høna og egget?",
            "__v": 0
        }
    ],
    "message": "Sucessfully retrieved polls"
  }
}

export default PollsMockApi