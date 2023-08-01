package Student;

public class OngoingProject extends Project {
    private String additionalProperty;

    // Constructor
    public OngoingProject(int projectId, String title, String description, String progress, String additionalProperty) {
        super(projectId, title, description, progress);
        this.additionalProperty = additionalProperty;
    }

    public String getAdditionalProperty() {
        return additionalProperty;
    }

    public void setAdditionalProperty(String additionalProperty) {
        this.additionalProperty = additionalProperty;
    }

    // Additional methods specific to OngoingProject can be added here
}





