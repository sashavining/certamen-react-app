import { gql } from '@apollo/client'

const QUESTION_DETAILS = gql`
  fragment QuestionDetails on Question {
    id
    source
    difficulty
    round
    mainQuestion
    mainAnswer
    firstFollowUpQuestion
    firstFollowUpAnswer
    secondFollowUpQuestion
    secondFollowUpAnswer
  }
`

export const QUESTION_COUNT = gql`
query {
  questionCount
}
`

export const UNIQUE_DIFFICULTIES = gql`
query {
  uniqueDifficulties
}
`
export const UNIQUE_SOURCES = gql`
query {
  uniqueSources
}
`

export const QUESTION_SET_BY_DIFFICULTY = gql`
  query findQuestionByDifficulty($difficultyToSearch: String!) {
    twentyQuestionsBySourceOrDifficulty(difficulty: $difficultyToSearch) {
        ...QuestionDetails
    }
  }
  ${QUESTION_DETAILS}
`

export const MC_QUESTION_SET_BY_DIFFICULTY = gql`
  query findQuestionByDifficulty($difficultyToSearch: String!) {
    twentyMCQuestionsBySourceOrDifficulty(difficulty: $difficultyToSearch) {
        ...QuestionDetails
    }
  }
  ${QUESTION_DETAILS}

`

export const QUESTION_SET_BY_SOURCE = gql`
  query findQuestionBySource($sourceToSearch: String!) {
    twentyQuestionsBySourceOrDifficulty(source: $sourceToSearch) {
        ...QuestionDetails
    }
  }
  ${QUESTION_DETAILS}

`

export const MC_QUESTION_SET_BY_SOURCE = gql`
  query findQuestionBySource($sourceToSearch: String!) {
    twentyMCQuestionsBySourceOrDifficulty(source: $sourceToSearch) {
        ...QuestionDetails
    }
  }
  ${QUESTION_DETAILS}

`

export const ALL_QUESTIONS = gql`
  query allQuestions {
    allQuestions {
        ...QuestionDetails
    }
  }
  ${QUESTION_DETAILS}

`

export const QUESTION_SET_BY_DIFFICULTY_AND_SOURCE = gql`
  query findQuestionByDifficultyAndSource($sourceToSearch: String!, $difficultyToSearch: String!) {
    twentyQuestionsBySourceOrDifficulty(source: $sourceToSearch, difficulty: $difficultyToSearch) {
        ...QuestionDetails
    }
  }
  ${QUESTION_DETAILS}
`

export const MC_QUESTION_SET_BY_DIFFICULTY_AND_SOURCE = gql`
query TwentyMCQuestionsBySourceOrDifficulty($difficultyToSearch: String, $sourceToSearch: String) {
  twentyMCQuestionsBySourceOrDifficulty(difficulty: $difficultyToSearch, source: $sourceToSearch) {
    id
    source
    difficulty
    round
    mainQuestion
    mainAnswer
    firstFollowUpQuestion
    firstFollowUpAnswer
    secondFollowUpQuestion
    secondFollowUpAnswer
    MCAnswers
  }
}
`

export const TIME_TRIAL_QUESTION_SET_BY_TOPIC = gql`
query twentyTimeTrialQuestionsByCategory($categoryToSearch: String) {
  twentyTimeTrialQuestionsByCategory(category: $categoryToSearch) {
    source
    category
    question
    answer
    optimalWord
    MCAnswers
  }
}
`