package ba.isss.models;

public class Ispit {

    private final long id;
    private final String content;

    public Ispit(long id, String content) {
        this.id = id;
        this.content = content;
    }

    public long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }
}
