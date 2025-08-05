import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Play, 
  Award, 
  Brain, 
  Clock, 
  CheckCircle,
  Star,
  Lightbulb,
  Users,
  Target,
  Zap,
  Trophy
} from "lucide-react";

const EnhancedEducationZone = () => {
  const [selectedLesson, setSelectedLesson] = useState<any>(null);
  const [quizMode, setQuizMode] = useState(false);
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const interactiveLessons = [
    {
      id: 1,
      title: "Plant Photosynthesis Lab",
      description: "Interactive virtual lab to understand how plants create energy",
      type: "interactive",
      duration: "15 min",
      difficulty: "Beginner",
      points: 100,
      modules: [
        {
          type: "video",
          title: "Introduction to Photosynthesis",
          content: "Watch how sunlight transforms into plant energy"
        },
        {
          type: "simulation",
          title: "Virtual Chloroplast",
          content: "Interactive 3D model of chloroplast structure"
        },
        {
          type: "experiment",
          title: "Light Spectrum Test",
          content: "Test different light colors on plant growth"
        }
      ]
    },
    {
      id: 2,
      title: "Ecosystem Food Web Builder",
      description: "Build and balance complex ecosystem relationships",
      type: "game",
      duration: "20 min",
      difficulty: "Intermediate",
      points: 150,
      modules: [
        {
          type: "drag-drop",
          title: "Create Food Chains",
          content: "Drag species to create balanced food webs"
        },
        {
          type: "simulation",
          title: "Population Dynamics",
          content: "See how changes affect entire ecosystems"
        }
      ]
    },
    {
      id: 3,
      title: "Climate Change Predictor",
      description: "Model climate scenarios and their environmental impact",
      type: "simulation",
      duration: "25 min",
      difficulty: "Advanced",
      points: 200,
      modules: [
        {
          type: "data-analysis",
          title: "Temperature Trends",
          content: "Analyze 100 years of climate data"
        },
        {
          type: "prediction",
          title: "Future Scenarios",
          content: "Model different intervention strategies"
        }
      ]
    }
  ];

  const adaptiveQuiz = {
    title: "Adaptive Plant Knowledge Quiz",
    questions: [
      {
        question: "Which part of the plant is primarily responsible for photosynthesis?",
        options: ["Roots", "Leaves", "Stem", "Flowers"],
        correct: 1,
        difficulty: "easy",
        explanation: "Leaves contain chloroplasts which house the photosynthesis process."
      },
      {
        question: "What gas do plants absorb during photosynthesis?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correct: 2,
        difficulty: "easy",
        explanation: "Plants absorb CO₂ from the atmosphere and convert it into glucose."
      },
      {
        question: "Which environmental factor most affects plant disease resistance?",
        options: ["Soil pH", "Humidity levels", "Light intensity", "All of the above"],
        correct: 3,
        difficulty: "intermediate",
        explanation: "Disease resistance is influenced by multiple environmental factors working together."
      }
    ]
  };

  const learningStats = {
    lessonsCompleted: 12,
    totalLessons: 25,
    averageScore: 94,
    streakDays: 7,
    totalPoints: 1840,
    level: 3,
    nextLevelPoints: 2000
  };

  const achievements = [
    { 
      name: "Quick Learner", 
      description: "Complete 5 lessons in one day",
      icon: "⚡",
      earned: true,
      points: 100
    },
    { 
      name: "Perfect Score", 
      description: "Get 100% on 3 consecutive quizzes",
      icon: "🎯",
      earned: true,
      points: 150
    },
    { 
      name: "Plant Expert", 
      description: "Complete all beginner plant courses",
      icon: "🌱",
      earned: false,
      points: 200
    },
    { 
      name: "Ecosystem Master", 
      description: "Master advanced ecosystem modeling",
      icon: "🌍",
      earned: false,
      points: 300
    }
  ];

  const startQuiz = () => {
    setQuizMode(true);
    setCurrentQuizQuestion(0);
    setQuizAnswers([]);
    setShowResults(false);
  };

  const answerQuestion = (answerIndex: number) => {
    const newAnswers = [...quizAnswers, answerIndex];
    setQuizAnswers(newAnswers);
    
    if (currentQuizQuestion < adaptiveQuiz.questions.length - 1) {
      setCurrentQuizQuestion(currentQuizQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    const correct = quizAnswers.reduce((count, answer, index) => {
      return answer === adaptiveQuiz.questions[index].correct ? count + 1 : count;
    }, 0);
    return Math.round((correct / adaptiveQuiz.questions.length) * 100);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-success text-success-foreground";
      case "Intermediate": return "bg-warning text-warning-foreground";
      case "Advanced": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "interactive": return <Brain className="w-4 h-4" />;
      case "game": return <Trophy className="w-4 h-4" />;
      case "simulation": return <Zap className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="p-8 text-center">
          <div className="space-y-6">
            <div className="text-6xl">
              {score >= 90 ? "🏆" : score >= 70 ? "🌟" : "👍"}
            </div>
            <h2 className="text-3xl font-bold text-foreground">
              Quiz Complete!
            </h2>
            <div className="text-4xl font-bold text-primary">{score}%</div>
            <p className="text-muted-foreground">
              You got {quizAnswers.filter((answer, index) => answer === adaptiveQuiz.questions[index].correct).length} out of {adaptiveQuiz.questions.length} questions correct!
            </p>
            
            <div className="space-y-3">
              {adaptiveQuiz.questions.map((question, index) => (
                <div key={index} className="p-4 bg-muted rounded-lg text-left">
                  <div className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                      quizAnswers[index] === question.correct ? 'bg-success text-success-foreground' : 'bg-destructive text-destructive-foreground'
                    }`}>
                      {quizAnswers[index] === question.correct ? '✓' : '✗'}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{question.question}</p>
                      <p className="text-sm text-muted-foreground mt-1">{question.explanation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Button variant="outline" onClick={() => setShowResults(false)}>
                Retake Quiz
              </Button>
              <Button variant="guardian" onClick={() => {
                setQuizMode(false);
                setSelectedLesson(null);
              }}>
                Continue Learning
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  if (quizMode) {
    const currentQuestion = adaptiveQuiz.questions[currentQuizQuestion];
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="p-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">{adaptiveQuiz.title}</h2>
              <Badge variant="secondary">
                {currentQuizQuestion + 1} / {adaptiveQuiz.questions.length}
              </Badge>
            </div>

            <Progress value={((currentQuizQuestion + 1) / adaptiveQuiz.questions.length) * 100} />

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">{currentQuestion.question}</h3>
              
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start text-left h-auto py-4 px-6 hover:bg-primary hover:text-primary-foreground"
                    onClick={() => answerQuestion(index)}
                  >
                    <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  if (selectedLesson) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <Card className="p-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-foreground">{selectedLesson.title}</h2>
                <p className="text-muted-foreground">{selectedLesson.description}</p>
              </div>
              <Badge variant="secondary" className={getDifficultyColor(selectedLesson.difficulty)}>
                {selectedLesson.difficulty}
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {selectedLesson.modules.map((module: any, index: number) => (
                <Card key={index} className="p-6 hover:shadow-elegant transition-shadow">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      {getTypeIcon(module.type)}
                      <h3 className="font-semibold text-foreground">{module.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{module.content}</p>
                    <Button variant="outline" className="w-full">
                      <Play className="w-4 h-4" />
                      Start Module
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <div className="flex gap-4 pt-6 border-t">
              <Button 
                variant="outline" 
                onClick={() => setSelectedLesson(null)}
                className="flex-1"
              >
                Back to Lessons
              </Button>
              <Button variant="guardian" onClick={startQuiz} className="flex-1">
                <Brain className="w-4 h-4" />
                Take Quiz (+{selectedLesson.points} points)
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Learning Progress */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 text-center">
          <BookOpen className="w-8 h-8 text-primary mx-auto mb-2" />
          <h3 className="text-2xl font-bold text-foreground">{learningStats.lessonsCompleted}</h3>
          <p className="text-muted-foreground">Lessons Completed</p>
        </Card>
        
        <Card className="p-6 text-center">
          <Star className="w-8 h-8 text-primary mx-auto mb-2" />
          <h3 className="text-2xl font-bold text-foreground">{learningStats.averageScore}%</h3>
          <p className="text-muted-foreground">Average Score</p>
        </Card>
        
        <Card className="p-6 text-center">
          <Target className="w-8 h-8 text-primary mx-auto mb-2" />
          <h3 className="text-2xl font-bold text-foreground">{learningStats.streakDays}</h3>
          <p className="text-muted-foreground">Day Streak</p>
        </Card>
        
        <Card className="p-6 text-center">
          <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
          <h3 className="text-2xl font-bold text-foreground">Level {learningStats.level}</h3>
          <p className="text-muted-foreground">{learningStats.nextLevelPoints - learningStats.totalPoints} to next</p>
        </Card>
      </div>

      {/* Interactive Lessons */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-foreground">Interactive Learning Experiences</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interactiveLessons.map((lesson) => (
            <Card key={lesson.id} className="p-6 hover:shadow-elegant transition-all hover:scale-105">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      {getTypeIcon(lesson.type)}
                      <h4 className="text-lg font-semibold text-foreground">{lesson.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{lesson.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {lesson.duration}
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={getDifficultyColor(lesson.difficulty)}
                  >
                    {lesson.difficulty}
                  </Badge>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-1 text-primary">
                    <Award className="w-4 h-4" />
                    <span className="font-medium">+{lesson.points} points</span>
                  </div>
                  <Button 
                    variant="guardian" 
                    size="sm"
                    onClick={() => setSelectedLesson(lesson)}
                  >
                    <Play className="w-4 h-4" />
                    Start
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4">Learning Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <div key={index} className={`p-4 rounded-lg border-2 ${
              achievement.earned 
                ? 'border-success bg-success/10' 
                : 'border-border bg-muted'
            }`}>
              <div className="flex items-center gap-4">
                <div className="text-3xl">{achievement.icon}</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{achievement.name}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Award className="w-3 h-3 text-primary" />
                    <span className="text-xs text-primary font-medium">+{achievement.points} points</span>
                  </div>
                </div>
                {achievement.earned && (
                  <CheckCircle className="w-6 h-6 text-success" />
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Quiz */}
      <Card className="p-8 text-center bg-gradient-hero">
        <div className="space-y-4">
          <Brain className="w-16 h-16 text-primary mx-auto" />
          <h3 className="text-2xl font-bold text-foreground">Ready for a Challenge?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Test your plant knowledge with our adaptive quiz system that adjusts to your learning level
          </p>
          <Button variant="guardian" size="lg" onClick={startQuiz}>
            <Lightbulb className="w-5 h-5" />
            Start Adaptive Quiz
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default EnhancedEducationZone;