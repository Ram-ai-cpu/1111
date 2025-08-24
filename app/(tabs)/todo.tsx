import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Plus, Check, MapPin, Clock } from 'lucide-react-native';
import GlowingBackground from '@/components/GlowingBackground';
import GlowingCard from '@/components/GlowingCard';
import NeonButton from '@/components/NeonButton';

interface Task {
  id: string;
  title: string;
  completed: boolean;
  location?: string;
  priority: 'low' | 'medium' | 'high';
}

export default function TodoScreen() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Visit the AI Technology Museum',
      completed: false,
      location: 'Downtown Tech District',
      priority: 'high',
    },
    {
      id: '2',
      title: 'Research quantum computing basics',
      completed: true,
      priority: 'medium',
    },
    {
      id: '3',
      title: 'Schedule team meeting for project Alpha',
      completed: false,
      location: 'Conference Room B',
      priority: 'high',
    },
  ]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      const task: Task = {
        id: Date.now().toString(),
        title: newTask,
        completed: false,
        priority: 'medium',
      };
      setTasks(prev => [...prev, task]);
      setNewTask('');
    }
  };

  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return '#EF4444';
      case 'medium': return '#F59E0B';
      case 'low': return '#10B981';
      default: return '#6B7280';
    }
  };

  return (
    <GlowingBackground>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Smart Tasks</Text>
          <Text style={styles.subtitle}>AI-powered productivity</Text>
        </View>

        <GlowingCard style={styles.addTaskCard}>
          <View style={styles.addTaskContainer}>
            <TextInput
              style={styles.addTaskInput}
              placeholder="Add a new task..."
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              value={newTask}
              onChangeText={setNewTask}
            />
            <TouchableOpacity style={styles.addButton} onPress={addTask}>
              <Plus size={20} color="#10B981" />
            </TouchableOpacity>
          </View>
        </GlowingCard>

        <ScrollView style={styles.tasksContainer}>
          {tasks.map((task) => (
            <GlowingCard key={task.id} style={styles.taskCard}>
              <TouchableOpacity 
                style={styles.taskContent}
                onPress={() => toggleTask(task.id)}
              >
                <View style={styles.taskHeader}>
                  <View style={[
                    styles.checkbox,
                    task.completed && styles.checkboxCompleted
                  ]}>
                    {task.completed && <Check size={16} color="#FFFFFF" />}
                  </View>
                  <View style={styles.taskInfo}>
                    <Text style={[
                      styles.taskTitle,
                      task.completed && styles.taskTitleCompleted
                    ]}>
                      {task.title}
                    </Text>
                    {task.location && (
                      <View style={styles.locationContainer}>
                        <MapPin size={12} color="#7C3AED" />
                        <Text style={styles.locationText}>{task.location}</Text>
                      </View>
                    )}
                  </View>
                  <View style={[
                    styles.priorityIndicator,
                    { backgroundColor: getPriorityColor(task.priority) }
                  ]} />
                </View>
              </TouchableOpacity>
            </GlowingCard>
          ))}
        </ScrollView>
      </SafeAreaView>
    </GlowingBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: 4,
  },
  addTaskCard: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  addTaskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  addTaskInput: {
    flex: 1,
    fontSize: 16,
    color: '#FFFFFF',
    paddingVertical: 8,
    paddingRight: 12,
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(16, 185, 129, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(16, 185, 129, 0.4)',
  },
  tasksContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  taskCard: {
    marginBottom: 12,
  },
  taskContent: {
    padding: 16,
  },
  taskHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  checkboxCompleted: {
    backgroundColor: '#10B981',
    borderColor: '#10B981',
  },
  taskInfo: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  taskTitleCompleted: {
    textDecorationLine: 'line-through',
    color: 'rgba(255, 255, 255, 0.5)',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  locationText: {
    fontSize: 12,
    color: '#7C3AED',
    marginLeft: 4,
  },
  priorityIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});