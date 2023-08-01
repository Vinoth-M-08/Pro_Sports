package Student;

public class OngoingProjects extends AbstractProject {
    private String additionalProperty;

    public String getAdditionalProperty() {
		return additionalProperty;
	}

	public void setAdditionalProperty(String additionalProperty) {
		this.additionalProperty = additionalProperty;
	}

	public OngoingProjects(int projectId, String title, String description, String progress, String additionalProperty) {
        super(projectId, title, description, progress);
        this.additionalProperty = additionalProperty;
    }

    @Override
    public void viewDetails() {
        System.out.println("Additional Property: " + additionalProperty);
    }

    
}