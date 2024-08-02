export const singlePostSchema = {
    "title": "Single post schema",
    "type": "object",
    "properties": {
        "id": {
            "type": "number"
        }
    },
    "required": [
        "id"
    ]
};

export const singleGetSchema = {
    "type": "array",
    "items": {
        "type": "object",
        "required": [
            "userId",
            "id",
            "title",
            "body"
        ],
        "properties": {
            "userId": {
                "type": "integer"
            },
            "id": {
                "type": "integer"
            },
            "title": {
                "type": "string"
            },
            "body": {
                "type": "string"
            }
        }
    }
}

export const getByIDSchema = {
    "type": "object",
    "required": [
        "userId",
        "id",
        "title",
        "body"
    ],
    "properties": {
        "userId": {
            "type": "integer"
        },
        "id": {
            "type": "integer"
        },
        "title": {
            "type": "string"
        },
        "body": {
            "type": "string"
        }
    }
}

export const putSchema = {
    "type": "object",
    "required": [
        "id"
    ],
    "properties": {
        "id": {
            "type": "integer"
        }
    }
}
